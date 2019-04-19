const mongoose = require('mongoose');
const billSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    billType: String,
    billName: String,
    bill_due_date: Date,
    bill_posted_date: Date,
    bill_pending: Boolean,
    bill_amount: Number
}, {collection: 'bills'});
module.exports = billSchema;
