const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'checkouts';

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.createCheckout = async (req, res) => {
    try {
        const { name, email, reportId, reportTitle, userType, price, orderDate, message } = req.body;

        const newCheckout = {
            id: Date.now(),
            name,
            email,
            reportId,
            reportTitle,
            userType,
            price,
            orderDate,
            message,
            paymentStatus: 'pending',
        };

        const params = {
            TableName: TABLE_NAME,
            Item: newCheckout,
        };

        console.log("Saving item to DynamoDB:", newCheckout);
        await dynamoDB.put(params).promise();

        // Send confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,  // Ensure this is a valid email
            subject: 'Checkout Confirmation',
            html: `
                <div>
                    <h2>Thank you for your order, ${name}!</h2>
                    <p>Your order details:</p>
                    <ul>
                        <li>Report ID: ${reportId}</li>
                        <li>Report Title: ${reportTitle}</li>
                        <li>User Type: ${userType}</li>
                        <li>Price: ${price}</li>
                        <li>Order Date: ${orderDate}</li>
                        <li>Message: ${message}</li>
                    </ul>
                    <p>We will process your order shortly.</p>
                </div>
            `,
        };

        console.log('Sending confirmation email to user:', userMailOptions.to); // Debugging line
        await transporter.sendMail(userMailOptions);

        // Send email to admin (notify about new checkout)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'sale@imrmarketreports.com',  // Ensure this is set correctly in environment variables
            subject: 'New Checkout Order',
            html: `
                <div>
                    <h2>New Order Created!</h2>
                    <p>A new checkout order has been placed:</p>
                    <ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Report ID: ${reportId}</li>
                        <li>Report Title: ${reportTitle}</li>
                        <li>User Type: ${userType}</li>
                        <li>Price: ${price}</li>
                        <li>Order Date: ${orderDate}</li>
                        <li>Message: ${message}</li>
                    </ul>
                    <p>Please review the order and proceed with the next steps.</p>
                </div>
            `,
        };

        console.log('Sending admin notification email to:', adminMailOptions.to); // Debugging line
        await transporter.sendMail(adminMailOptions);

        res.status(201).json({ success: true, data: newCheckout });
    } catch (error) {
        console.error("Error creating checkout:", error);
        res.status(500).json({ success: false, message: `Error creating checkout: ${error.message}` });
    }
};
