const mongoose = require('mongoose');
 
const publishersSchema = new mongoose.Schema({
    id:{ type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    value: { type: String, required: true },
 
},{
    collection: 'publishers'
});
 
const Publishers = mongoose.model('Publishers', publishersSchema);
 
module.exports = Publishers;