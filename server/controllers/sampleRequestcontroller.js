// controllers/sampleRequestController.js
const SampleRequest = require('../models/samplerequest');

// Handle creating a new sample request
exports.createSampleRequest = async (req, res) => {
    try {
        const newRequest = new SampleRequest(req.body);
        await newRequest.save();
        res.status(201).json({ message: 'Request stored successfully' });
    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ message: 'Error storing request' });
    }
};
