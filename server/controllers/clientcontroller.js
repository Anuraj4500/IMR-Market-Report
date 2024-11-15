const Client = require('../models/client');
const mongoose = require('mongoose');

// Get all clients
exports.getAllClients = async (req, res) => {
    try {
        console.log('Database connection state:', mongoose.connection.readyState);
        console.log('Attempting to fetch clients...');
        
        // List all collections in the database
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Available collections:', collections.map(c => c.name));
        
        const clients = await Client.find({});
        console.log('Raw database response:', clients);
        
        if (!clients || clients.length === 0) {
            console.log('No clients found in database');
            return res.status(404).json({ message: "No clients found" });
        }
        
        console.log(`Found ${clients.length} clients`);
        res.json(clients);
    } catch (error) {
        console.error('Detailed error:', error);
        res.status(500).json({ message: error.message });
    }
};

// Create new client
exports.createClient = async (req, res) => {
    try {
        const client = new Client({
            id: req.body.id,
            title: req.body.title,
            content: req.body.content,
            image: req.file.filename
        });
        
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (error) {
        console.error('Error creating client:', error);
        res.status(400).json({ message: error.message });
    }
};