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
