const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify transporter
transporter.verify((error) => {
    if (error) {
        console.error('Email configuration error:', error);
    } else {
        console.log('Email configuration is valid.');
    }
});

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);

const submitContactForm = async (req, res) => {
    try {
        const { name, email, phone, country, company, designation, message, usercaptcha } = req.body;

        // Validation
        if (!name || !email || !phone || !country || !company || !designation || !usercaptcha) {
            return res.status(400).json({ message: 'All fields are required except message.' });
        }

        // Generate a unique id for each entry (as a string)
        const id = Date.now().toString(); // Example: "1684349012345"

        // DynamoDB contact entry
        const contactEntry = {
            TableName: 'contactus',
            Item: {
                id, // Save `id` as a string
                name,
                email,
                phone,
                country,
                company,
                designation,
                message: message || '',
                usercaptcha,
            },
        };

        // Save to DynamoDB
        await dynamoDB.put(contactEntry).promise();

        // Send email after saving to DynamoDB
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'namarata@introspectivemarketresearch.com',
            subject: 'New Contact Form IMR Market Report',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
                    <h2 style="color: #0056b3; text-align: center;">New Contact Form Submission</h2>
                    <p style="font-size: 16px;">You have received a new contact form submission. Below are the details:</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tr>
                            <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Name</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Email</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${email}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Phone</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Country</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${country}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Company</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${company}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Designation</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${designation}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Message</td>
                            <td style="padding: 5px; border: 1px solid #ddd;">${message || 'N/A'}</td>
                        </tr>
                    </table>
                    <p style="margin-top: 20px; font-size: 14px; color: #555;">
                        <i>This is an automated message. Please do not reply to this email.</i>
                    </p>
                </div>
            `,
        });

        // Send success response
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error saving submission:', error);
        if (error.message.includes('Invalid login')) {
            console.error('Invalid email credentials. Check your configuration.');
            return res.status(401).json({ message: 'Invalid email credentials. Please check your email configuration.' });
        }
        res.status(500).json({ message: 'Error saving submission.', error: error.message });
    }
};

module.exports = { submitContactForm };
