const express = require('express');
const nodemailer = require('nodemailer'); // Import nodemailer
const router = express.Router();
const ContactUs = require('../models/contactus'); // Import the ContactUs model

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable for email
        pass: process.env.EMAIL_PASS  // Use environment variable for password
    },
});

// Check transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Error with email transporter:', error);
    } else {
        console.log('Email transporter is ready to send messages.');
    }
});

// POST route for handling contact form submissions
router.post('/contactus', async (req, res) => {
    const { name, email, phone, country, company, designation, message, usercaptcha } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !country || !company || !designation || !usercaptcha) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new contact form entry
    const contactEntry = new ContactUs({
        name,
        email,
        phone,
        country,
        company,
        designation,
        message,
        usercaptcha,
    });

    try {
        // Save the entry to the database
        await contactEntry.save();
        console.log(`Received contact form submission: ${name}, ${email}, ${message}`);

        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_USER, // Use environment variable for sender email
            to: 'imr.anuraj001@gmail.com', // List of recipients
            subject: 'New Contact Form Submission', // Subject line
            text: `You have a new contact form submission from ${name} (${email}):\n\n${message}`, // Plain text body
        };

        await transporter.sendMail(mailOptions); // Send the email
        console.log('Email sent successfully:', mailOptions);

        // Send a response back to the client
        res.status(200).json({ message: 'Contact form submitted successfully!' });
    } catch (error) {
        console.error('Error saving contact form submission or sending email:', error);
        res.status(500).json({ message: 'Error submitting contact form.', error: error.message });
    }
});

module.exports = router;
