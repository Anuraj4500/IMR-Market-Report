const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/CheckoutController');

// Route to fetch all checkouts
router.get('/', checkoutController.getAllCheckouts);

// Route to create a new checkout
router.post('/', checkoutController.createCheckout);

// Route to update payment status for a specific checkout
router.put('/:id/payment', checkoutController.updatePaymentStatus);

module.exports = router;
