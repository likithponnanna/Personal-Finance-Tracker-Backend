const stockDao = require('../dao/stock.dao.server')
module.exports = app => {
    createStock = (req, res) =>
        stockDao.createStock(req.body,req.session.currentUser[0]._id).then(stock => res.json(stock))

    deleteStock = (req, res) =>
        stockDao.deleteStock(req.params.stockId).then(stock => res.json(stock))

    updateStock = (req, res) =>
        stockDao.updateStock(req.params.stockId, req.body).then(stock => res.json(stock))

    findAllStocks = (req, res) =>
        stockDao.findAllStocks(req.session.currentUser[0]._id).then(stock => res.json(stock))

    findStockById = (req, res) =>
        stockDao.findStockById(req.params['stockId']).then(stock => res.json(stock))

    app.put('/api/stock/:stockId', updateStock)
    app.delete('/api/stock/:stockId', deleteStock)
    app.get('/api/stock/:stockId', findStockById)
    app.get('/api/stock', findAllStocks)
    app.post('/api/stock', createStock)
}
