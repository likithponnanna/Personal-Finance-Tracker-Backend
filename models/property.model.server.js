const mongoose = require('mongoose')
const propertySchema = require('../schemas/property.schema.server')
const propertyModel = mongoose.model('PropertyModel', propertySchema)
module.exports = propertyModel;
