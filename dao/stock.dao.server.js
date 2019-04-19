const stockModel = require('../models/stocks.model.server');

createStock = (stock, userId) => {
    stock.user = userId;
    return stockModel.create(stock);
}

findAllStocks = (userId) =>
    stockModel.find({"user":userId}).populate('user').exec();

findStockById = stockId =>
    stockModel.findById(stockId).populate('user').exec();

updateStock = (stockId, stock) =>
    stockModel.update({_id: stockId}, {$set: stock});

deleteStock = stockId =>
    stockModel.remove({_id: stockId})

module.exports = {
    createStock,
    findAllStocks,
    findStockById,
    updateStock,
    deleteStock
}
