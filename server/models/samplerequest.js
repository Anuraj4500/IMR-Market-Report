const mongoose = require('mongoose');

const sampleRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        trim: true
    },
    country: String,
    company: {
        type: String,
        required: [true, 'Company is required'],
        trim: true
    },
    designation: String,
    message: String,
    reportId: {
        type: String,
        required: [true, 'Report ID is required'],
        trim: true
    },
    reportTitle: String,
    slug: String,
    category: String,
    requestDate: {
        type: Date,
        default: Date.now
    },
    requestType: {
        type: String,
        default: 'sample'
    },
    status: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true,
    collection: 'request_samples'
});

// Add pre-save middleware for additional validation
sampleRequestSchema.pre('save', function(next) {
    console.log('Pre-save middleware running for sample request:', this);
    next();
});

module.exports = mongoose.model('SampleRequest', sampleRequestSchema);