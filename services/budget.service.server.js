const budgetDao = require('../dao/budget.dao.server')

module.exports = app => {


    createBudget = (req, res) =>
        budgetDao.createBudget(req.body,req.session.currentUser[0]._id).then(budget => res.json(budget))

    findAllBudget = (req, res) =>
        budgetDao.findAllBudget(req.session.currentUser[0]._id).then(budget => res.json(budget))

    findBudgetById = (req, res) =>
        budgetDao.findBudgetById(req.params['budgetId']).then(budget => res.json(budget))

    updateBudget = (req, res) =>
        budgetDao.updateBudget(req.params.budgetId, req.body,req.session.currentUser[0]._id).then(status => res.json(status))

    deleteBudget = (req, res) =>
        budgetDao.deleteBudget(req.params.budgetId, req.body).then(budget => res.json(budget))

    findBudgetByMonth = (req, res) =>
        budgetDao.findBudgetByMonth(req.session.currentUser[0]._id, req.params.month).then(budget => res.json(budget))

    findAllBudgetTotal = (req, res) =>
        budgetDao.findAllBudgetAdmin().then(budget => {
            let sum=0;
            for(let i=0; i<budget.length;i++){
                sum = sum + budget[i].amount;
            }
            res.json({count: sum})
        })

    app.put('/api/budget/:budgetId', updateBudget)
    app.delete('/api/budget/:budgetId', deleteBudget)
    app.get('/api/budget/:budgetId', findBudgetById)
    app.get('/api/budget', findAllBudget)
    app.post('/api/budget', createBudget)
    app.get('/api/budget/month/:month', findBudgetByMonth)
    app.get('/api/total/budget', findAllBudgetTotal)
}


