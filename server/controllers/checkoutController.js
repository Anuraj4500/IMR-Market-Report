const Checkout = require('../models/Checkout');
const nodemailer = require('nodemailer');

// Get all checkouts
exports.getAllCheckouts = async (req, res) => {
    try {
        console.log('Fetching all checkout data...');
        const checkouts = await Checkout.find({});
        console.log('Found checkouts:', checkouts);
        res.json(checkouts);
    } catch (error) {
        console.error('Error fetching checkouts:', error);
        res.status(500).json({ message: error.message });
    }
};

// Create a new checkout
exports.createCheckout = async (req, res) => {
    try {
        console.log('Received checkout data:', req.body);

        const checkout = new Checkout({
            customerInfo: {
                name: req.body.name,
                email: req.body.email,
                designation: req.body.designation,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                phone: req.body.phone,
                message: req.body.message
            },
            reportInfo: {
                reportId: req.body.reportId,
                reportTitle: req.body.reportTitle,
                userType: req.body.userType,
                price: req.body.price
            },
            orderDate: req.body.orderDate || new Date(),
            paymentStatus: req.body.paymentStatus || 'pending'
        });

        console.log('Created checkout object:', checkout);

        const savedCheckout = await checkout.save();
        console.log('Saved checkout:', savedCheckout);

        // Setup Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'namarata@introspectivemarketresearch.com',
            subject: `IMR Market Report - Purchase Successful - ${req.body.reportTitle}`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
                <h2 style="color: #28a745; text-align: center;">Purchase Successful</h2>
                <p style="font-size: 16px;">A purchase has been completed successfully. Below are the details:</p>
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
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Report Title</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.reportTitle}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Payment Status</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.paymentStatus}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Transaction ID</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.transactionId}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Country</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.country}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">City</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.city}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">State</td>
                        <td style="padding: 5px; border: 1px solid #ddd;">${req.body.state}</td>
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
        

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        res.status(201).json({
            success: true,
            data: savedCheckout
        });
    } catch (error) {
        console.error('Error creating checkout:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Update payment status
exports.updatePaymentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { paymentStatus, paypalOrderId } = req.body;

        const updatedCheckout = await Checkout.findByIdAndUpdate(
            id,
            {
                paymentStatus,
                paypalOrderId,
                paymentDate: new Date()
            },
            { new: true }
        );

        if (!updatedCheckout) {
            return res.status(404).json({ success: false, error: 'Checkout not found' });
        }

        res.json({ success: true, data: updatedCheckout });
    } catch (error) {
        console.error('Error updating payment:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};
