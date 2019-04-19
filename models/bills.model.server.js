const mongoose = require('mongoose')
const billSchema = require('../schemas/bills.schema.server')
const billModel = mongoose.model('BillModel', billSchema)
module.exports = billModel;
