const mongoose = require('mongoose');
const config = require('../config/database/mongoose');

// Item Schema
const ItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemQty: {
        type: Number,
        required: true
    },
    itemBought: {
        type: Boolean,
        required: true
    }
});
const Item = module.exports = mongoose.model('Item', ItemSchema);
