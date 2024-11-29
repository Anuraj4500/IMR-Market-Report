const express = require('express');
const router = express.Router();
const askDiscountController = require('../controllers/askdiscountcontroller');

// POST - Create a new discount request
router.post('/', askDiscountController.createAskDiscount);

// GET - Retrieve all discount requests
router.get('/', askDiscountController.getAllAskDiscounts);

// GET - Retrieve a specific discount request by ID
router.get('/:id', askDiscountController.getAskDiscountById);

// PUT - Update a discount request by ID
router.put('/:id', askDiscountController.updateAskDiscount);

// DELETE - Delete a discount request by ID
router.delete('/:id', askDiscountController.deleteAskDiscount);

module.exports = router;
