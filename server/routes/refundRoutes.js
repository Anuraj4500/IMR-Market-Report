const express = require('express');
const { getRefundPolicies } = require('../controllers/refundController');

const router = express.Router();

// Define the route for fetching refund policies
router.get('/', getRefundPolicies);

module.exports = router; 