// models/report.js
const mongoose = require('mongoose');
 
const reportSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        index: true
    },
    cid: { type: String },
    pid: { type: String },
    keyword: { type: String },
    title: { type: String, required: true },
    mtitle: { type: String },
    summary: { type: String },
    summary_desc: { type: String },
    toc: { type: String },
    sprice: { type: String },
    mprice: { type: String },
    eprice: { type: String },
    pages: { type: String },
    date: { type: Date, default: Date.now },
    cdate: { type: Date, default: Date.now },
    slug: { type: String },
    created_by: { type: String },
    created_time: { type: Date, default: Date.now },
    updated_by: { type: String },
    updated_time: { type: Date, default: Date.now }
}, {
    collection: 'report'
});
 
const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
 