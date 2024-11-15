const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getAllClients, createClient } = require('../controllers/clientcontroller');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Route to get all clients
router.get('/', getAllClients);

// Route to create a new client
router.post('/', upload.single('image'), createClient);

module.exports = router;