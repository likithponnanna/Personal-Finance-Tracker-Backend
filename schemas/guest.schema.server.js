const mongoose = require('mongoose');
const guestSchema = mongoose.Schema({
    // _id: Number,
    firstName: String,
    lastName: String,
    DOB: String,
    address: String,
    phoneNumber: Number,
    email: String,
    status: {type: String, enum: ['PENDING','APPROVED','REJECTED']},
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel'}
}, {collection: 'guest'});
module.exports = guestSchema;


