const Publishers = require('../models/publishers');

const getAllPublishers = async (req, res) => {
    console.log('Received request for publishers');
    try {
        const publishers = await Publishers.find();
        if (!publishers || publishers.length === 0) {
            return res.status(404).json({ message: 'No publishers found' });
        }
        console.log('Fetched publishers:', publishers);
        res.json(publishers);
    } catch (error) {
        console.error('Error fetching publishers:', error);
        res.status(500).json({ message: 'Error fetching publishers' });
    }
};

module.exports = {
    getAllPublishers,
};
