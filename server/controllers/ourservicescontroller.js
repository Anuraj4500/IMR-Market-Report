const OurServices = require('../models/ourservices');

// Fetch all our services
const getOurServices = async (req, res) => {
    try {
        const ourservices = await OurServices.find();
        res.status(200).json(ourservices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getOurServices }; 