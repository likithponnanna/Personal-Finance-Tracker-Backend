const mongoose = require('mongoose')
const accountSchema = require('../schemas/account.schema.server')
const accountModel = mongoose.model('AccountModel', accountSchema)
module.exports = accountModel;
