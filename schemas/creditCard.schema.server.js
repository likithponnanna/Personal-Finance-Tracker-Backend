const mongoose = require('mongoose');
const creditCardSchema = mongoose.Schema({
    // _id: Number,
    accountNo: Number,
    bankName: String,
    accountName: String,
    balance: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    maxLimit: Number,
    rewardAmount: Number,
    billingCyle: Date,
    dueDate: Date,
    amountDueOnDueDate: Number,
    interestRate: Number,
}, {collection: 'creditCard'});
module.exports = creditCardSchema;


