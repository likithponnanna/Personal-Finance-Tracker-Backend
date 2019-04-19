const transactionDao = require('../dao/transaction.dao.server')
module.exports = app => {
    createTransaction = (req, res) =>
        transactionDao.createTransaction(req.body, req.session.currentUser[0]._id).then(transaction => res.json(transaction))

    findAllTransactions = (req, res) =>
        transactionDao.findAllTransactions(req.session.currentUser[0]._id).then(transaction => res.json(transaction))

    findTransactionById = (req, res) =>
        transactionDao.findTransactionById(req.params['transactionId']).then(transaction => res.json(transaction))

    findTransactionByUserId = (req, res) =>
        transactionDao.findAllTransactions(req.params['userId']).then(transaction => res.json(transaction))

    deleteTransaction = (req, res) =>
        transactionDao.deleteTransaction(req.params.transactionId).then(transaction => res.json(transaction))

    updateTransaction = (req, res) =>
        transactionDao.updateTransaction(req.params.transactionId, req.body).then(transaction => res.json(transaction))

    findAllTransactionWeek = (req, res) =>
        transactionDao.findAllTransactionWeek(req.session.currentUser[0]._id).then(transactions => res.json(transactions))

    findAllTransactionMonth = (req, res) =>
        transactionDao.findAllTransactionMonth(req.session.currentUser[0]._id).then(transactions => res.json(transactions))

    findAllTransactionMonthSum = (req, res) =>
        transactionDao.findAllTransactionMonth(req.session.currentUser[0]._id).then(transactions => {
            let sum = 0;
            for (let i = 0; i < transactions.length; i++) {
                sum = sum + transactions[i].amount;
            }
            res.json({"Amount": sum})
        })

    findAllTransactionHalfYear = (req, res) =>
        transactionDao.findAllTransactionHalfYear(req.session.currentUser[0]._id).then(transactions => res.json(transactions))

    findAllTransactionYear = (req, res) =>
        transactionDao.findAllTransactionYear(req.session.currentUser[0]._id).then(transactions => res.json(transactions))

    findAllTransactionsAdmin = (req, res) =>
        transactionDao.findAllTransactionsAdmin().then(transaction => res.json(transaction))

    findAllCategoryTransactions = (req, res) =>
        transactionDao.findAllCategoryTransactions(req.session.currentUser[0]._id, req.params.categoryName).then(transaction => res.json(transaction))

    findAllCategoryMonthTransactions = (req, res) =>
        transactionDao.findAllCategoryMonthTransactions(req.session.currentUser[0]._id, req.params.categoryName).then(transaction => res.json(transaction))

    findAllSpendsHalfYear = (req, res) => {
        let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
        let dat = new Date().getMonth() + 12;
        let month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";


        transactionDao.findAllTransactionMonth(req.session.currentUser[0]._id).then(transactions => {
            for (let i = 0; i < transactions.length; i++) {
                a = a + transactions[i].amount;
            }
            return transactionDao.findAllTransactionTwoMonth(req.session.currentUser[0]._id);
        }).then(transactions => {
            for (let i = 0; i < transactions.length; i++) {
                b = b + transactions[i].amount;
            }
            return transactionDao.findAllTransactionThreeMonth(req.session.currentUser[0]._id);
        }).then(transactions => {
            for (let i = 0; i < transactions.length; i++) {
                c = c + transactions[i].amount;
            }
            return transactionDao.findAllTransactionFourMonth(req.session.currentUser[0]._id);
        }).then(transactions => {
            for (let i = 0; i < transactions.length; i++) {
                d = d + transactions[i].amount;
            }
            return transactionDao.findAllTransactionFiveMonth(req.session.currentUser[0]._id);
        }).then(transactions => {
            for (let i = 0; i < transactions.length; i++) {
                e = e + transactions[i].amount;
            }
            return transactionDao.findAllTransactionSixMonth(req.session.currentUser[0]._id);
        }).then(transactions => {
            for (let i = 0; i < transactions.length; i++) {
                f = f + transactions[i].amount;
            }
            //res.json({[month[dat%12]]:a, [month[(dat-1)%12]]:b, [month[(dat-2)%12]]:c,[month[(dat-3)%12]]:d,[month[(dat-4)%12]]:e,[month[(dat-5)%12]]:f})
            res.json({
                "month": [month[dat % 12], month[(dat - 1) % 12], month[(dat - 2) % 12], month[(dat - 3) % 12], month[(dat - 4) % 12], month[(dat - 5) % 12]],
                "amount": [a, b, c, d, e, f]
            })
        })
    }

    findnumberofTransactions = (req, res) =>
        transactionDao.findAllTransactionsAdmin().then(transaction => res.json({count: transaction.length}))

    app.put('/api/transaction/:transactionId', updateTransaction)
    app.delete('/api/transaction/:transactionId', deleteTransaction)
    app.get('/api/transaction/:transactionId', findTransactionById)
    app.get('/api/transaction/user/:userId', findTransactionByUserId)
    app.get('/api/transaction', findAllTransactions)
    app.get('/api/category/transaction/:categoryName', findAllCategoryTransactions)
    app.get('/api/month/category/transaction/:categoryName', findAllCategoryMonthTransactions)
    app.post('/api/transaction', createTransaction)
    app.get('/api/transaction/week/all', findAllTransactionWeek)
    app.get('/api/transaction/month/all', findAllTransactionMonth)
    app.get('/api/transaction/month/sum', findAllTransactionMonthSum)
    app.get('/api/transaction/halfYear/all', findAllTransactionHalfYear)
    app.get('/api/transaction/year/all', findAllTransactionYear)
    app.get('/api/admin/transaction', findAllTransactionsAdmin)
    app.get('/api/transaction/halfYear/spends', findAllSpendsHalfYear)
    app.get('/api/number/transaction', findnumberofTransactions)
}
