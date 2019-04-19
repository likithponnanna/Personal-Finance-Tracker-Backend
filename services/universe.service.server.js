const universeDao = require('../dao/universe.dao.server')

module.exports = app => {
    findAssetTotal = (req, res) => {
        let sum = 0;
        let debt = 0;
        return universeDao.findTotalAccount(req.session.currentUser[0]._id).then(amount => {
            for (let i = 0; i < amount.length; i++) {
                sum = sum + amount[i].balance
            }
            return universeDao.findTotalProperty(req.session.currentUser[0]._id);
        }).then(property => {
            for (let i = 0; i < property.length; i++) {
                sum = sum + property[i].value
            }
            return universeDao.findTotalStock(req.session.currentUser[0]._id);
        }).then(stock => {
            for (let i = 0; i < stock.length; i++) {
                sum = sum + stock[i].purchase_price
            }
            return universeDao.findTotalBill(req.session.currentUser[0]._id);
        }).then(bills => {
            for (let i = 0; i < bills.length; i++) {
                if (bills[i].bill_amount != null)
                    debt = debt + bills[i].bill_amount
            }
            return universeDao.findTotalCC(req.session.currentUser[0]._id);
        }).then(CC => {
            for (let i = 0; i < CC.length; i++) {
                if (CC[i].amountDueOnDueDate != null)
                    debt = debt + CC[i].amountDueOnDueDate
            }
            let CS = 800 - (debt / sum) * 500;
            CS = CS.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
            res.json({TotalAsset: sum, TotalDebt: debt, CreditScore: CS})
        })
    }

    app.get('/api/universe/total', findAssetTotal)
}
