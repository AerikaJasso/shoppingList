const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./config/database/mongoose');

// Initialize express
const app = express();

// Connect to DB
mongoose.connect(config.database, {
    useMongoClient: true ,
})

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database: ' + config.database);
});

// Connect Error
mongoose.connection.on('error', (err) => {
    console.log('Database Error: ' + err);
});

// Item file from routes
const items = require('./config/routes/items');

// Enable All CORS Requests
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Use items for all items routes
app.use('/api', items);

// default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

const port = 3000;

app.listen(port,() => {
    console.log('App is listening on port: ' + port);
})

