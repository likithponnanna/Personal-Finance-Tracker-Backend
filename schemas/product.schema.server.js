const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    // _id: Number,
    name: String,
    bank: String,
    details: String,
    url: String,
    type: {type: String, enum: ['CREDIT_CARD', 'SAVING', 'CHECKING']},
}, {collection: 'product'});
module.exports = productSchema;


