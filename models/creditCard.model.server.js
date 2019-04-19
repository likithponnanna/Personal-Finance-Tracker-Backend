const mongoose = require('mongoose')
const creditCardSchema = require('../schemas/creditCard.schema.server')
const creditCardModel = mongoose.model('CreditCardModel', creditCardSchema)
module.exports = creditCardModel;
