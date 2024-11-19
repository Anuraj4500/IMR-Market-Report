const Refund = require('../models/refundModel');

// Fetch all refund policies
const getRefundPolicies = async (req, res) => {
    try {
        const refunds = await Refund.find();
        res.status(200).json(refunds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getRefundPolicies }; 