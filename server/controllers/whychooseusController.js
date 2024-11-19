// controllers/whychooseusController.js
const WhyChooseUs = require('../models/whychooseus');

// Controller function to get the why choose us data
const getWhyChooseUsData = async (req, res) => {
    console.log('Received request for why choose us'); // Debugging log
    try {
        const whyChooseUsData = await WhyChooseUs.find();
        if (!whyChooseUsData || whyChooseUsData.length === 0) {
            return res.status(404).json({ message: 'Why choose us data not found' });
        }
        console.log('Fetched why choose us:', whyChooseUsData); // Log fetched why choose us
        res.json(whyChooseUsData);
    } catch (error) {
        console.error('Error fetching why choose us:', error); // Log error
        res.status(500).json({ message: 'Error fetching why choose us' });
    }
};

module.exports = {
    getWhyChooseUsData,
};