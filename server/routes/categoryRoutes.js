const express = require('express');
const router = express.Router();
const Category = require('../models/category');
 
// Route to fetch all categories
router.get('/category', async (req, res) => {
    console.log('Received request for categories');
    try {
        const category = await Category.find();
        console.log('Categories fetched:', category);
        res.json(category);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
 
module.exports = router;