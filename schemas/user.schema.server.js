const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    // _id: Number,
    username: {type: String, required: true, unique: true, dropDups: true },
    password: String,
    firstName: String,
    lastName: String,
    DOB: String,
    address: String,
    phoneNumber: Number,
    email: String,
    isAdmin: Boolean
}, {collection: 'user'});
module.exports = userSchema;
