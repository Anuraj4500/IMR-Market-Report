const FAQ = require('../models/FAQ');

// Get all FAQs
const getFaqs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new FAQ
const createFaq = async (req, res) => {
  const { que, ans } = req.body;
  try {
    const newFaq = new FAQ({ que, ans });
    const savedFaq = await newFaq.save();
    res.status(201).json(savedFaq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getFaqs, createFaq }; 