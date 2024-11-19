const mongoose = require('mongoose');

const termsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
}, { collection: 'terms' });

module.exports = mongoose.model('Terms', termsSchema); 