// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const Report = require('../models/report');
 
// GET all reports
router.get('/reports', async (req, res) => {
    console.log('Received request for reports'); // Debugging log
    try {
        const reports = await Report.find();
        console.log('Fetched reports:', reports); // Log fetched reports
        res.json(reports);
    } catch (error) {
        console.error('Error fetching reports:', error); // Log error
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
 
module.exports = router;