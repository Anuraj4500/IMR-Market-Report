const AskDiscount = require('../models/askdiscount');
const nodemailer = require('nodemailer');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
// Create a new discount request
exports.createAskDiscount = async (req, res) => {
    try {
         // Add IP address to the request body
        req.body.ipAddress = req.ip;
        const newRequest = new AskDiscount(req.body);
        const savedRequest = await newRequest.save();

        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'namarata@introspectivemarketresearch.com', // Assuming the email is provided in the request body
            subject: 'Discount Request Confirmation',
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
                <h2 style="color: #0056b3; text-align: center;">New Ask for Discount Request Submitted</h2>
                <p style="font-size: 16px;">You have received a new ask for discount request. Below are the details:</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Name</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.name}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Email</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.email}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Phone</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.phone}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Country</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.country}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Company</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.company}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Designation</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.designation}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Message</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.message || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">IP Address</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.ipAddress}</td>
                    </tr>
                </table>
                <p style="margin-top: 20px; font-size: 14px; color: #555;">
                    <i>This is an automated message. Please do not reply to this email.</i>
                </p>
            </div>
        `,
        };
        await transporter.sendMail(mailOptions); // Send the email

        res.status(201).json({ message: 'Discount request created successfully', data: savedRequest });
    } catch (error) {
        console.error('Error creating discount request:', error);
        res.status(500).json({ message: 'Error creating discount request', error: error.message });
    }
};

// Get all discount requests
exports.getAllAskDiscounts = async (req, res) => {
    try {
        const requests = await AskDiscount.find();
        res.status(200).json(requests);
    } catch (error) {
        console.error('Error fetching discount requests:', error);
        res.status(500).json({ message: 'Error fetching discount requests', error: error.message });
    }
};

// Get a specific discount request by ID
exports.getAskDiscountById = async (req, res) => {
    try {
        const request = await AskDiscount.findById(req.params.id);
        if (!request) return res.status(404).json({ message: 'Discount request not found' });
        res.status(200).json(request);
    } catch (error) {
        console.error('Error fetching discount request:', error);
        res.status(500).json({ message: 'Error fetching discount request', error: error.message });
    }
};

// Update a discount request
exports.updateAskDiscount = async (req, res) => {
    try {
        const updatedRequest = await AskDiscount.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRequest) return res.status(404).json({ message: 'Discount request not found' });
        res.status(200).json({ message: 'Discount request updated successfully', data: updatedRequest });
    } catch (error) {
        console.error('Error updating discount request:', error);
        res.status(500).json({ message: 'Error updating discount request', error: error.message });
    }
};

// Delete a discount request
exports.deleteAskDiscount = async (req, res) => {
    try {
        const deletedRequest = await AskDiscount.findByIdAndDelete(req.params.id);
        if (!deletedRequest) return res.status(404).json({ message: 'Discount request not found' });
        res.status(200).json({ message: 'Discount request deleted successfully', data: deletedRequest });
    } catch (error) {
        console.error('Error deleting discount request:', error);
        res.status(500).json({ message: 'Error deleting discount request', error: error.message });
    }
};
