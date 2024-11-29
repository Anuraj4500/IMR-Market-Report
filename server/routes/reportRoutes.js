// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const Report = require('../models/report');

// GET all reports
router.get('/reports', async (req, res) => {
    const { cid, page = 1, limit = 10 } = req.query; // Get cid, page, and limit from query parameters
    console.log('Received request for reports with cid:', cid, 'page:', page, 'limit:', limit); // Debugging log

    try {
        const skip = (page - 1) * limit; // Calculate the number of reports to skip
        let reports;
        const query = cid ? { cid } : {}; // Query based on cid

        reports = await Report.find(query).skip(skip).limit(Number(limit));
        const totalReports = await Report.countDocuments(query); // Get total number of reports
        const totalPages = Math.ceil(totalReports / limit); // Calculate total pages

        console.log('Fetched reports:', reports); // Log fetched reports

        if (reports.length === 0) {
            return res.status(404).json({ message: 'No reports found' });
        }

        res.json({ reports, totalPages }); // Return reports and total pages
    } catch (error) {
        console.error('Error fetching reports:', error); // Log error
        res.status(500).json({ message: 'Error fetching reports' });
    }
});

router.get('/reports', async (req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    try {
        const searchQuery = q.replace(/\+/g, ' ').trim();
        const isIdSearch = /^\d+$/.test(searchQuery); // Check if the query is numeric (ID-based)

        let reports;
        if (isIdSearch) {
            // Search by ID
            reports = await Report.find({ id: searchQuery });
        } else {
            // Search by keyword
            const searchTerms = searchQuery.split(' '); // Split query into words
            reports = await Report.find({
                $or: searchTerms.map((term) => ({
                    $or: [
                        { keyword: { $regex: term, $options: 'i' } },
                        { title: { $regex: term, $options: 'i' } },
                        { mtitle: { $regex: term, $options: 'i' } },
                        { summary: { $regex: term, $options: 'i' } },
                    ],
                })),
            });
        }

        if (reports.length === 0) {
            return res.status(404).json({ message: 'No reports found' });
        }

        res.json(reports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ message: 'Error fetching reports' });
    }
});


  
// GET report by slug
router.get('/reports/slug/:slug', async (req, res) => {
    console.log('Received request for report by slug:', req.params.slug); // Debugging log
    try {
        const report = await Report.findOne({ slug: req.params.slug });
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        console.log('Fetched report:', report); // Log fetched report
        res.json(report);
    } catch (error) {
        console.error('Error fetching report by slug:', error); // Log error
        res.status(500).json({ message: 'Error fetching report' });
    }
});

// Search reports by ID or keywords
router.get('/reports/search', async (req, res) => {
    const searchQuery = req.query.query;
    console.log('Received search request:', searchQuery); // Debug log
 
    if (!searchQuery) {
        return res.status(400).json({ message: 'Search query is required' });
    }
 
    const isNumericId = /^\d+$/.test(searchQuery);
    if (isNumericId) {
        console.log('Searching by ID:', searchQuery); // Debug log
        const report = await Report.findOne({ id: searchQuery }); // Ensure correct type
        if (!report) {
            console.log(`No report found with ID ${searchQuery}`); // Debug log
            return res.status(404).json({ message: `No report found with ID ${searchQuery}` });
        }
        return res.json([report]);
    }
 
    try {
        const searchPattern = new RegExp(searchQuery, 'i'); // Case-insensitive search
        const reports = await Report.find({
            $or: [
                { title: searchPattern },
                { keywords: searchPattern },
            ],
        }).select('-__v');
 
        if (reports.length === 0) {
            return res.status(404).json({ message: 'No reports matched your search query. Please refine your keywords.' });
        }
 
        res.json(reports);
    } catch (error) {
        console.error('Error performing search:', error);
        res.status(500).json({ message: 'Error performing search', error: error.message });
    }
});
 
// GET report by ID
router.get('/reports/:id', async (req, res) => {
    try {
        const report = await Report.findOne({ id: req.params.id }); // treat ID as a string
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.json(report);
    } catch (error) {
        console.error('Error fetching report:', error);
        res.status(500).json({ message: 'Error fetching report' });
    }
});
 
module.exports = router;
