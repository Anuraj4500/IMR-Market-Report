const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
}, { collection: 'refund' });

const Refund = mongoose.model('Refund', refundSchema);

module.exports = Refund; 