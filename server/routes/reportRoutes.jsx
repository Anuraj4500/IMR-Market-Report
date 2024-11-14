const express = require('express');
const router = express.Router();
const Report = require('../models/report');

// Get all reports
router.get('/reports', async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
