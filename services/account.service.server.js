const accountDao = require('../dao/account.dao.server')

module.exports = app => {

    createAccount = (req, res) =>
        accountDao.createAccount(req.body,req.session.currentUser[0]._id).then(account => res.json(account))

    findAllAccounts = (req, res) =>
        accountDao.findAllAccounts(req.session.currentUser[0]._id).then(accounts => res.json(accounts))

    findAccountById = (req, res) =>
        accountDao.findAccountById(req.params['accountId']).then(account => res.json(account))

    deleteAccount = (req, res) =>
        accountDao.deleteAccount(req.params.accountId).then(status => res.json(status))

    updateAccount = (req, res) =>
        accountDao.updateAccount(req.params.accountId, req.body).then(account => res.json(account))


    createSavingAccount = (req, res) =>
        accountDao.createSavingAccount(req.body,req.session.currentUser[0]._id).then(account => res.json(account))

    findAllSavingAccounts = (req, res) =>
        accountDao.findAllSavingAccounts(req.session.currentUser[0]._id).then(accounts => res.json(accounts))

    findSavingAccountById = (req, res) =>
        accountDao.findSavingAccountById(req.params['accountId']).then(account => res.json(account))

    deleteSavingAccount = (req, res) =>
        accountDao.deleteSavingAccount(req.params.accountId).then(status => res.json(status))

    updateSavingAccount = (req, res) =>
        accountDao.updateSavingAccount(req.params.accountId, req.body).then(account => res.json(account))


    createCheckingAccount = (req, res) =>
        accountDao.createCheckingAccount(req.body,req.session.currentUser[0]._id).then(account => res.json(account))

    findAllCheckingAccounts = (req, res) =>
        accountDao.findAllCheckingAccounts(req.session.currentUser[0]._id).then(accounts => res.json(accounts))

    findCheckingAccountById = (req, res) =>
        accountDao.findCheckingAccountById(req.params['accountId']).then(account => res.json(account))

    deleteCheckingAccount = (req, res) =>
        accountDao.deleteCheckingAccount(req.params.accountId).then(status => res.json(status))

    updateCheckingAccount = (req, res) =>
        accountDao.updateCheckingAccount(req.params.accountId, req.body).then(account => res.json(account))

    app.put('/api/account/:accountId', updateAccount)
    app.delete('/api/account/:accountId', deleteAccount)
    app.get('/api/account/:accountId', findAccountById)
    app.get('/api/account', findAllAccounts)
    app.post('/api/account', createAccount)

    app.put('/api/saving/account/:accountId', updateSavingAccount)
    app.delete('/api/saving/account/:accountId', deleteSavingAccount)
    app.get('/api/saving/account/:accountId', findSavingAccountById)
    app.get('/api/saving/account', findAllSavingAccounts)
    app.post('/api/saving/account', createSavingAccount)

    app.put('/api/checking/account/:accountId', updateCheckingAccount)
    app.delete('/api/checking/account/:accountId', deleteCheckingAccount)
    app.get('/api/checking/account/:accountId', findCheckingAccountById)
    app.get('/api/checking/account', findAllCheckingAccounts)
    app.post('/api/checking/account', createCheckingAccount)
}
