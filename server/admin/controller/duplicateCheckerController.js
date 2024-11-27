const Report = require('../models/adminreports');
const CheckDuplicatesCollection = require('../models/nonDuplicateKeywords');
const xlsx = require('xlsx');
const fs = require('fs');

// Function to normalize keywords (remove special characters, plurals, etc.)
const normalizeKeyword = (keyword) => {
  return keyword
    .toLowerCase() // Convert to lowercase
    .replace(/'s$/g, '') // Remove possessive suffix (e.g., "testing's" -> "testing")
    .replace(/s$/g, '') // Remove plural suffix (e.g., "testings" -> "testing")
    .replace(/[^\w\s]/g, '') // Remove special characters and punctuation
    .trim(); // Remove leading and trailing whitespace
};

// Function to capitalize each word
const capitalizeKeyword = (keyword) => {
  return keyword
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};

// Function to generate a random number
const generateRandomNumber = (length = 8) => {
  return Math.floor(Math.random() * Math.pow(10, length));
};

exports.checkDuplicatesAndCreateExcel = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded." });
    }

    // Read the uploaded Excel file
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    if (!rows.length || !rows[0].hasOwnProperty('Keywords')) {
      return res.status(400).json({ message: "Invalid file format. Ensure the file contains a 'Keywords' column in column A." });
    }

    // Extract keywords from the uploaded file (from column A)
    const uploadedKeywords = rows.map(row => row["Keywords"]).filter(Boolean);

    // Step 1: Remove duplicates and variations (case-insensitive, normalized)
    const seenKeywords = new Map(); // Map to track normalized keywords and their original form

    uploadedKeywords.forEach((keyword) => {
      const normalized = normalizeKeyword(keyword);
      if (!seenKeywords.has(normalized)) {
        seenKeywords.set(normalized, keyword); // Store the first occurrence of the canonical version
      }
    });

    // Get the unique keywords in their original form
    const uniqueUploadedKeywords = Array.from(seenKeywords.values());

    console.log("Unique Keywords from uploaded file (case-sensitive, normalized):", uniqueUploadedKeywords);

    // Capitalize all keywords for the final output
    const capitalizedKeywords = uniqueUploadedKeywords.map(capitalizeKeyword);
    console.log("Capitalized Keywords for Excel:", capitalizedKeywords);

    // Step 2: Fetch existing keywords from the Report collection and normalize
    const existingReports = await Report.find({}, { keyword: 1, _id: 0 });
    const existingKeywords = existingReports.map(report => normalizeKeyword(report.keyword));

    // Step 3: Find non-duplicate keywords (not in Report collection)
    const nonDuplicateKeywords = capitalizedKeywords.filter(keyword => {
      const normalized = normalizeKeyword(keyword);
      return !existingKeywords.includes(normalized);
    });

    console.log("Non-Duplicate Keywords:", nonDuplicateKeywords);

    // Step 4: Save non-duplicate keywords to the CheckDuplicatesCollection
    const nonDuplicateDocuments = nonDuplicateKeywords.map(keyword => ({ keyword }));
    await CheckDuplicatesCollection.insertMany(nonDuplicateDocuments);

    // Step 5: Create a new Excel file with capitalized, non-duplicate keywords
    const newWorkbook = xlsx.utils.book_new();
    const newWorksheet = xlsx.utils.aoa_to_sheet([['Keywords'], ...nonDuplicateKeywords.map(keyword => [keyword])]);
    xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, 'Non-Duplicate Keywords');

    // Save the Excel file with a random number in its name
    const randomNumber = generateRandomNumber();
    const newFilePath = `uploads/non_duplicate_keywords_${randomNumber}.xlsx`;
    xlsx.writeFile(newWorkbook, newFilePath);
    console.log("File saved at:", newFilePath);

    // Respond with the download link and the uploaded data
    res.status(200).json({
      message: "File processed successfully.",
      downloadLink: newFilePath,
      uploadedData: uniqueUploadedKeywords, // Original keywords in case-sensitive format
    });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).send({ message: "Error processing file." });
  } finally {
    // Clean up the uploaded file
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
  }
};
