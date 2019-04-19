const guestDao = require('../dao/guest.dao.server')

module.exports = app => {

    createGuest = (req, res) =>
        guestDao.createGuest(req.body).then(guest => res.json(guest))

    findAllGuests = (req, res) =>
        guestDao.findAllGuests().then(guests => res.json(guests))

    findGuestById = (req, res) =>
        guestDao.findGuestById(req.params['guestId']).then(guest => res.json(guest))

    deleteGuest = (req, res) =>
        guestDao.deleteGuest(req.params.guestId).then(status => res.json(status))

    updateGuest = (req, res) =>
        guestDao.updateGuest(req.params.guestId, req.body).then(guest => res.json(guest))

    updateGuestApprove = (req, res) =>
        guestDao.updateGuestApprove(req.params.guestId, req.body).then(guest => res.json(guest))

    updateGuestReject = (req, res) =>
        guestDao.updateGuestReject(req.params.guestId, req.body).then(guest => res.json(guest))

    populateGuest = (req,res) =>
        guestDao.populateProductToGuest(req.params.name)
            .then(product => res.json(product))

    findAllPendingGuests = (req, res) =>
        guestDao.findAllPendingGuests().then(guests => res.json(guests))

    findAllApproveGuests = (req, res) =>
        guestDao.findAllApproveGuests().then(guests => res.json(guests))

    findAllRejectGuests = (req, res) =>
        guestDao.findAllRejectGuests().then(guests => res.json(guests))

    app.put('/api/guest/:guestId', updateGuest)
    app.put('/api/guest/:guestId/approve', updateGuestApprove)
    app.put('/api/guest/:guestId/reject', updateGuestReject)
    app.put('/api/guest/:guestId', updateGuest)
    app.delete('/api/guest/:guestId', deleteGuest)
    app.get('/api/pending/guest', findAllPendingGuests)
    app.get('/api/approve/guest', findAllApproveGuests)
    app.get('/api/reject/guest', findAllRejectGuests)
    app.get('/api/guest/:guestId', findGuestById)
    app.get('/api/guest', findAllGuests)
    app.post('/api/guest', createGuest)
    app.get('/api/guest/populate/:name',populateGuest)

}
