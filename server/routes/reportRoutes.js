const express = require('express');
const router = express.Router();
const Report = require('../models/report');

// GET all reports
router.get('/reports', async (req, res) => {
    try {
        const reports = await Report.getAllReports();
        res.json(reports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ message: 'Error fetching reports' });
    }
});

// GET report by ID
router.get('/reports/:id', async (req, res) => {
    try {
        const report = await Report.getReportById(req.params.id);
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.json(report);
    } catch (error) {
        console.error('Error fetching report:', error);
        res.status(500).json({ message: 'Error fetching report' });
    }
});

// GET report by slug
router.get('/reports/:slug', async (req, res) => {
    try {
        const report = await Report.findOne({ slug: req.params.slug });
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.json(report);
    } catch (error) {
        console.error('Error fetching report:', error.message);
        res.status(500).json({ message: 'Error fetching report' });
    }
});


// Search reports
router.get('/reports/search', async (req, res) => {
    const searchQuery = req.query.query;
    if (!searchQuery) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    try {
        const reports = await Report.searchReports(searchQuery);
        if (!reports || reports.length === 0) {
            return res.status(404).json({ message: 'No reports matched your search query.' });
        }
        res.json(reports);
    } catch (error) {
        console.error('Error performing search:', error);
        res.status(500).json({ message: 'Error performing search' });
    }
});

module.exports = router;
