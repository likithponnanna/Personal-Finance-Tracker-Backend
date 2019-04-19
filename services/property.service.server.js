const propertyDao = require('../dao/property.dao.server')
module.exports = app => {
    createProperty = (req, res) =>
        propertyDao.createProperty(req.body, req.session.currentUser[0]._id).then(property => res.json(property))

    findAllProperties = (req, res) =>
        propertyDao.findAllProperties(req.session.currentUser[0]._id).then(propertys => res.json(propertys))

    findPropertyById = (req, res) =>
        propertyDao.findPropertyById(req.params['propertyId']).then(property => res.json(property))

    deleteProperty = (req, res) =>
        propertyDao.deleteProperty(req.params.propertyId).then(property => res.json(property))

    updateProperty = (req, res) =>
        propertyDao.updateProperty(req.params.propertyId, req.body).then(property => res.json(property))

    app.put('/api/property/:propertyId', updateProperty)
    app.delete('/api/property/:propertyId', deleteProperty)
    app.get('/api/property/:propertyId', findPropertyById)
    app.get('/api/property', findAllProperties)
    app.post('/api/property', createProperty)
}
