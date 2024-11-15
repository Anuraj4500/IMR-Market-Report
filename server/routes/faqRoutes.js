const express = require('express');
const router = express.Router();
const { getFaqs, createFaq } = require('../controllers/faqController');

// Route to get all FAQs
router.get('/', getFaqs);

// Route to create a new FAQ (optional, for adding new FAQs)
router.post('/', createFaq);

module.exports = router;
