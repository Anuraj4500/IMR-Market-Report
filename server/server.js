// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reportRoutes = require('./routes/reportRoutes');
const contactusRoutes = require('./routes/contactusRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const faqRoutes = require('./routes/faqRoutes');
const aboutUsRoutes = require('./routes/aboutus');
const clientRoutes = require('./routes/clientroutes'); 
const whychooseusRoutes = require('./routes/whychooseusRoutes'); 
const termsRoutes = require('./routes/termsandconditionsRoutes');
const refundRoutes = require('./routes/refundRoutes');
const adminReportsRoutes = require('./admin/routes/adminreportsRoutes');
const ourservicesRoutes = require('./routes/ourservicesRoutes');
const publisherRoutes = require('./routes/publishersRoutes');
const sampleRequestRoutes = require('./routes/sampleRequestRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');

const fs = require('fs');
const path = require('path');

const app = express();
 
app.use(cors({
    origin: 'http://localhost:3000' // Update if your frontend runs on a different port
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
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
 
// Routes
app.use('/api/faqs', faqRoutes);
app.use('/api/aboutus', aboutUsRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api', reportRoutes);
app.use('/api', contactusRoutes);
app.use('/api', categoryRoute);
app.use('/api/whychooseus', whychooseusRoutes);
app.use('/api/terms', termsRoutes);
app.use('/api/refund-policy', refundRoutes);
app.use('/api/adminreports', adminReportsRoutes);
app.use('/api/ourservices', ourservicesRoutes);
app.use('/api/publishers', publisherRoutes);
app.use('/api/samplerequest', sampleRequestRoutes);
app.use('/api/Checkout', checkoutRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});