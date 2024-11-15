const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    id: Number,
    title: String,
    content: String,
    image: String
}, {
    collection: 'client'
});

module.exports = mongoose.model('Client', clientSchema);