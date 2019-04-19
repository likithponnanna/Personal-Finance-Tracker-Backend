const propertyModel = require('../models/property.model.server')

createProperty = (property,userId) => {
    property.user = userId;
    return propertyModel.create(property);
}

findAllProperties = (userId) =>
    propertyModel.find({"user":userId});

findPropertyById = propertyId =>
    propertyModel.findById(propertyId);

updateProperty = (propertyId, property) =>
    propertyModel.updateOne({_id: propertyId}, {$set: property});

deleteProperty = propertyId =>
    propertyModel.deleteOne({_id: propertyId})

module.exports = {
    createProperty,
    findAllProperties,
    findPropertyById,
    updateProperty,
    deleteProperty
}
