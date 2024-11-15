const mongoose = require('mongoose');

// Define the FAQ schema
const faqSchema = new mongoose.Schema({
  que: { type: String, required: true },
  ans: { type: String, required: true }
}, { collection: 'faq', timestamps: true }); // Explicitly set collection name to 'faq'

// Create and export the FAQ model
module.exports = mongoose.model('FAQ', faqSchema);
