const mongoose = require('mongoose');
const propertySchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    address: String,
    area: Number,
    value: Number,
    latitude: Number,
    longitude: Number
}, {collection: 'property'});
module.exports = propertySchema;
