const mongoose = require('mongoose');
const accountSchema = mongoose.Schema({
    // _id: Number,
    accountNo: Number,
    bankName: String,
    accountName: String,
    balance: Number,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    type: {type: String, enum: ['SAVING', 'CHECKING']},
}, {collection: 'account'});
module.exports = accountSchema;


