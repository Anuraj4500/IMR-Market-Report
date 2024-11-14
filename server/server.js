// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reportRoutes = require('./routes/reportRoutes');
 
const app = express();
 
app.use(cors({
    origin: 'http://localhost:3000' // Update if your frontend runs on a different port
}));
app.use(express.json());
 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
 
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
});
 
app.use('/api', reportRoutes);
 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});