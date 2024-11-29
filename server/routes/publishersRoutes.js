const express = require('express');
const router = express.Router();
const { getAllPublishers } = require('../controllers/publisherController');
 
// Route to fetch all publishers
router.get('/publishers', getAllPublishers);
 
module.exports = router;