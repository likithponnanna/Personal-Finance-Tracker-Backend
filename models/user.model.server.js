const mongoose = require('mongoose')
const userSchema = require('../schemas/user.schema.server')
const userModel = mongoose.model('UserModel', userSchema)
module.exports = userModel;