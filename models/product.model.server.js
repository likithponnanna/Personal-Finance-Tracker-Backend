const mongoose = require('mongoose')
const productSchema = require('../schemas/product.schema.server')
const productModel = mongoose.model('ProductModel', productSchema)
module.exports = productModel;