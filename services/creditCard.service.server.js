const creditCardDao = require('../dao/creditCard.dao.server')

module.exports = app => {


    createCreditCard = (req, res) =>
        creditCardDao.createCreditCard(req.body,req.session.currentUser[0]._id).then(creditCard => res.json(creditCard))

    findAllCreditCards = (req, res) =>
        creditCardDao.findAllCreditCards(req.session.currentUser[0]._id).then(creditCards => res.json(creditCards))

    findCreditCardById = (req, res) =>
        creditCardDao.findCreditCardById(req.params['creditCardId']).then(creditCard => res.json(creditCard))

    deleteCreditCard = (req, res) =>
        creditCardDao.deleteCreditCard(req.params.creditCardId).then(status => res.json(status))

    updateCreditCard = (req, res) =>
        creditCardDao.updateCreditCard(req.params.creditCardId, req.body).then(creditCard => res.json(creditCard))

    app.put('/api/creditCard/:creditCardId', updateCreditCard)
    app.delete('/api/creditCard/:creditCardId', deleteCreditCard)
    app.get('/api/creditCard/:creditCardId', findCreditCardById)
    app.get('/api/creditCard', findAllCreditCards)
    app.post('/api/creditCard', createCreditCard)
}


