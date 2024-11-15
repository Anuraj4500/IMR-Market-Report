// routes/aboutus.js
const express = require('express');
const router = express.Router();
const Report = require('../models/aboutus');

router.get('/', async (req, res) => {
    console.log('Received request for about'); // Debugging log
    try {
        const about = await Report.find();
        console.log('Fetched about:', about); // Log fetched about
        res.json(about);
    } catch (error) {
        console.error('Error fetching about:', error); // Log error
        res.status(500).json({ message: 'Error fetching about' });
    }
});

module.exports = router;
