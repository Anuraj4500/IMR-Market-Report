const Terms = require('../models/termsandconditions'); // Import the Terms model

// Get all terms and conditions
const getTerms = async (req, res) => {
    try {
        const terms = await Terms.find();
        res.json(terms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new term and condition
const createTerm = async (req, res) => {
    const { title, content } = req.body; // Destructure the request body
    try {
        const newTerm = new Terms({ title, content });
        const savedTerm = await newTerm.save();
        res.status(201).json(savedTerm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getTerms, createTerm }; // Export the controller functions
