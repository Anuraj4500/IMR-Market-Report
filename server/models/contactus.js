const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: async () => {
            const lastContact = await ContactUs.findOne().sort({ id: -1 });
            return lastContact ? lastContact.id + 1 : 1;
        },
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/ // Simple email validation
    },
    phone: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: false,
    },
    usercaptcha: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const ContactUs = mongoose.model('ContactUs', contactUsSchema, 'contactus');

module.exports = ContactUs;
