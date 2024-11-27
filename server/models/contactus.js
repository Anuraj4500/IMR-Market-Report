const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
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
    },
    usercaptcha: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

contactUsSchema.pre('save', async function (next) {
    if (!this.id) {
        const lastContact = await this.constructor.findOne().sort({ id: -1 }).exec();
        this.id = lastContact ? lastContact.id + 1 : 1;
    }
    next();
});

const ContactUs = mongoose.model('ContactUs', contactUsSchema);
module.exports = ContactUs;
