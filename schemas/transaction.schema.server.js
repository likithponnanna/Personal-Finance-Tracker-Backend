const mongoose = require('mongoose');
const tranactionSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    category: String,
    payment_type: String,
    date_of_transaction: Date,
    payment_source: String,
    amount: Number
}, {collection: 'tranactions'});
module.exports = tranactionSchema;
