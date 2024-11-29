const express = require('express');
const router = express.Router();
const sampleRequestController = require('../controllers/sampleRequestcontroller');

// Create a new sample request
router.post('/', sampleRequestController.createSampleRequest);

// Get all sample requests
router.get('/', sampleRequestController.getAllSampleRequests);

// Get a single sample request by ID
router.get('/:id', sampleRequestController.getSampleRequestById);

// Delete a sample request by ID
router.delete('/:id', sampleRequestController.deleteSampleRequestById);

module.exports = router;
