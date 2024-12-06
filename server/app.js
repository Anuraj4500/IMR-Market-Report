const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from specific origin
app.use(cors({
    origin: 'https://imr-market-report-client.vercel.app', // Update this to your frontend's URL
}));

// Add a basic endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the IMR Market Report API!');
});

// Example API route (optional)
app.get('/api/test', (req, res) => {
    res.json({ message: 'Test API is working!' });
});

// Export the app
module.exports = app;
