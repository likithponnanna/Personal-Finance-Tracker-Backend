const mongoose = require('mongoose')
const stockSchema = require('../schemas/stocks.schema.server')
const stockModel = mongoose.model('StocksModel', stockSchema)
module.exports = stockModel;
