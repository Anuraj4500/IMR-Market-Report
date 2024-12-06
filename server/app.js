const express = require('express');
const cors = require('cors');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();

// Allow requests from a specific origin
app.use(cors({
    origin: 'https://imr-market-report-client.vercel.app', // Your frontend's URL
}));

// Configure AWS SDK for DynamoDB
AWS.config.update({
    region: process.env.AWS_REGION, 
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Test DynamoDB Connection
const dynamoDB = new AWS.DynamoDB.DocumentClient();

dynamoDB.listTables({}, (err, data) => {
    if (err) {
        console.error('Failed to connect to DynamoDB:', err.message);
    } else {
        console.log('DynamoDB connection established successfully:', data.TableNames);
    }
});

// Add a basic endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the IMR Market Report API!');
});

// Example API route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Test API is working!' });
});

// Export the app
module.exports = app;
