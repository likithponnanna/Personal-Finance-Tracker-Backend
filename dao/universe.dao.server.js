const accountModel = require('../models/account.model.server')
const propertyModel = require('../models/property.model.server')
const stockModel = require('../models/stocks.model.server')
const billModel = require('../models/bills.model.server')
const creditCardModel = require('../models/creditCard.model.server')

findTotalAccount = (userId) =>
    accountModel.find({user: userId})

findTotalProperty = userId =>
    propertyModel.find({user: userId})

findTotalStock = userId =>
    stockModel.find({user: userId})

findTotalBill = userId =>
    billModel.find({bill_pending: true,user: userId})

findTotalCC = userId =>
    creditCardModel.find({user: userId})

module.exports = {
    findTotalAccount,
    findTotalProperty,
    findTotalStock,
    findTotalCC,
    findTotalBill
}
