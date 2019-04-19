const billDao = require('../dao/bills.dao.server')
module.exports = app => {
    createBill = (req, res) =>
        billDao.createBill(req.body, req.session.currentUser[0]._id).then(bill => res.json(bill))

    createBillUserId = (req, res) =>
        billDao.createBill(req.body, req.params.userId).then(bill => res.json(bill))

    findAllBills = (req, res) =>
        billDao.findAllBills(req.session.currentUser[0]._id).then(bills => res.json(bills))

    findAllBillsAdmin = (req, res) =>
        billDao.findAllBillsAdmin().then(bills => res.json(bills))

    findBillById = (req, res) =>
        billDao.findBillById(req.params['billId']).then(bill => res.json(bill))

    deleteBill = (req, res) =>
        billDao.deleteBill(req.params.billId).then(bill => res.json(bill))


    updateBill = (req, res) =>
        billDao.updateBill(req.params.billId, req.body).then(bill => res.json(bill))

    pendingBills = (req, res) =>
        billDao.pendingBills(req.session.currentUser[0]._id).then(bills => res.json(bills))


    paidBills = (req, res) =>
        billDao.paidBills(req.session.currentUser[0]._id).then(bills => res.json(bills))

    findAllBillsWeekDue = (req, res) =>
        billDao.findAllBillsWeekDue(req.session.currentUser[0]._id).then(bills => res.json(bills))

    findAllBillsMonthDue = (req, res) =>
        billDao.findAllBillsMonthDue(req.session.currentUser[0]._id).then(bills => res.json(bills))

    findAllBillsYearDue = (req, res) =>
        billDao.findAllBillsYearDue(req.session.currentUser[0]._id).then(bills => res.json(bills))

    findAllBillsWeekPosted = (req, res) =>
        billDao.findAllBillsWeekPosted(req.session.currentUser[0]._id).then(bills => res.json(bills))

    findAllBillsMonthPosted = (req, res) =>
        billDao.findAllBillsMonthPosted(req.session.currentUser[0]._id).then(bills => res.json(bills))

    findAllBillsYearPosted = (req, res) =>
        billDao.findAllBillsYearPosted(req.session.currentUser[0]._id).then(bills => res.json(bills))

    findBillsByUserId = (req, res) =>
        billDao.findBillsByUserId(req.params.userId).then(bills => res.json(bills))


    app.put('/api/bill/:billId', updateBill)
    app.delete('/api/bill/:billId', deleteBill)
    app.get('/api/bill/:billId', findBillById)
    app.get('/api/bill', findAllBills)
    app.get('/api/admin/bill', findAllBillsAdmin)
    app.post('/api/bill', createBill)
    app.post('/api/admin/bill/:userId', createBillUserId)
    app.get('/api/bill/pending/all', pendingBills)
    app.get('/api/bill/paid/all', paidBills)
    app.get('/api/bill/week/due/all', findAllBillsWeekDue)
    app.get('/api/bill/month/due/all', findAllBillsMonthDue)
    app.get('/api/bill/year/due/all', findAllBillsYearDue)
    app.get('/api/bill/week/posted/all', findAllBillsWeekPosted)
    app.get('/api/bill/month/posted/all', findAllBillsMonthPosted)
    app.get('/api/bill/year/posted/all', findAllBillsYearPosted)
    app.get('/api/bill/user/:userId', findBillsByUserId)
}
