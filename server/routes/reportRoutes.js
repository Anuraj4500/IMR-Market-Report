// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const reportModel = require('../models/report');

// GET all reports
router.get('/reports', async (req, res) => {
    try {
        const reports = await reportModel.getAllReports();
        res.json(reports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ message: 'Error fetching reports' });
    }
});

// GET report by ID
router.get('/reports/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const report = await reportModel.getReportById(id);
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.json(report);
    } catch (error) {
        console.error('Error fetching report:', error);
        res.status(500).json({ message: 'Error fetching report' });
    }
});

// POST: Create a new report
router.post('/reports', async (req, res) => {
    try {
        const newReport = req.body;
        await reportModel.createReport(newReport);
        res.status(201).json({ message: 'Report created successfully' });
    } catch (error) {
        console.error('Error creating report:', error);
        res.status(500).json({ message: 'Error creating report' });
    }
});

// PUT: Update a report by ID
router.put('/reports/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await reportModel.updateReport(id, req.body);
        res.json({ message: 'Report updated successfully' });
    } catch (error) {
        console.error('Error updating report:', error);
        res.status(500).json({ message: 'Error updating report' });
    }
});

// DELETE: Delete a report by ID
router.delete('/reports/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await reportModel.deleteReport(id);
        res.json({ message: 'Report deleted successfully' });
    } catch (error) {
        console.error('Error deleting report:', error);
        res.status(500).json({ message: 'Error deleting report' });
    }
});

module.exports = router;
