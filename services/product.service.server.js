const productDao = require('../dao/product.dao.server')

module.exports = app => {

    createProduct = (req, res) =>
        productDao.createProduct(req.body).then(product => res.json(product))

    findAllProducts = (req, res) =>
        productDao.findAllProducts().then(products => res.json(products))

    findProductById = (req, res) =>
        productDao.findProductById(req.params['productId']).then(product => res.json(product))

    deleteProduct = (req, res) =>
        productDao.deleteProduct(req.params.productId).then(status => res.json(status))

    updateProduct = (req, res) =>
        productDao.updateProduct(req.params.productId, req.body).then(product => res.json(product))

    approveProduct = (req, res) =>
        productDao.approveProduct(req.params.productId, req.body).then(product => res.json(product))

    rejectProduct = (req, res) =>
        productDao.rejectProduct(req.params.productId, req.body).then(product => res.json(product))

    findPendingProduct = (req, res) =>
        productDao.findPendingProduct().then(products => res.json(products))

    findRejectedProduct = (req, res) =>
        productDao.findRejectedProduct().then(products => res.json(products))

    findApprovedProduct = (req, res) =>
        productDao.findApprovedProduct().then(products => res.json(products))

    app.put('/api/product/:productId', updateProduct)
    app.delete('/api/product/:productId', deleteProduct)
    app.get('/api/product/:productId', findProductById)
    app.get('/api/product', findAllProducts)
    app.post('/api/product', createProduct)
}
