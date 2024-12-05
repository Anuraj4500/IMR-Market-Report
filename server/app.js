const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from specific origin
app.use(cors({
    origin: 'https://imr-market-report-client.vercel.app', // Update this to your frontend's URL
}));

// Other middleware and routes 