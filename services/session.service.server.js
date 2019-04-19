module.exports = app => {

    getSession = (req, res) => {
        res.send(req.session);
    }

    getSessionNew = (req, res) => {

        res.send(req.session.currentUser[0]);
    }

    app.get('/api/session', getSession);
    app.get('/api/profile', getSessionNew);
}
