const mongoose = require('mongoose');
const budgetSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    amount: Number,
    month: String
}, {collection: 'budget'});
module.exports = budgetSchema;
