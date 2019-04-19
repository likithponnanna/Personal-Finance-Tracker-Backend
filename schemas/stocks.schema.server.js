const mongoose = require('mongoose');
const stockSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    stock_name: String,
    stock_symbol: String,
    purchase_price: Number,
    category: String,
    purchase_date: Date,
    no_of_shares: Number
}, {collection: 'stocks'});
module.exports = stockSchema;
