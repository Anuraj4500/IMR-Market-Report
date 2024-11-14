const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    cid: String,
    pid: String,
    keyword: String,
    title: String,
    mtitle: String,
    summary: String,
    summary_desc: String,
    toc: String,
    sprice: String,
    mprice: String,
    eprice: String,
    pages: String,
    date: Date,
    cdate: Date,
    slug: String,
    created_by: String,
    created_time: Date,
    updated_by: String,
    updated_time: Date
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
