const userDao = require('../dao/user.dao.server')

module.exports = app => {

    registerUser = (req, res) =>
        userDao.createUser(req.body).then(function (user) {
            req.session['currentUser'] = [user];
            res.send(user)
        }).catch(reason =>
            res.send({username: "duplicate_777"})
        )

    findAllUsers = (req, res) =>
        userDao.findAllUsers().then(users => res.json(users))

    loginUser = (req, res) => {
        userDao.loginUser(req.body.username, req.body.password).then(function (user) {
            if (user.length === 0) {
                res.json([{username: "INVALID"}]);
            } else {
                req.session['currentUser'] = user;
                res.send(user) //sends empty if un and pwd doesnt match
            }
        })

    }

    logoutUser = (req, res) => {
        req.session.destroy();
        res.send(200);
    }

    profileUser = (req, res) => {
        userDao.findUserByUsername(req.params.username).then(user =>
            res.json(user))
    }

    updateUser = (req, res) => {
        userDao.updateUser(req.params.userId, req.body).then(user =>
            res.json(user))
    }

    updateUserSession = (req, res) => {
        userDao.updateUser(req.params.userId, req.body).then(user => {
            req.session['currentUser'] = [req.body];
            return res.json(req.body)
        })
    }

    deleteUser = (req, res) => {
        userDao.deleteUser(req.params.userId).then(status =>
            res.json(status)
        )
    }

    makeAdmin = (req, res) => {
        userDao.makeAdmin(req.params.username).then(user => res.json(user));
    }

    findUserById = (req, res) =>
        userDao.findUserById(req.params.userId).then(users => res.json(users))

    numberOfAdmins = (req, res) =>
        userDao.numberOfAdmins().then(users => res.json({count: users.length}))


    app.put('/api/user/:username/admin', makeAdmin);
    app.post('/api/register', registerUser);
    app.get('/api/user', findAllUsers);
    app.post('/api/login', loginUser);
    app.get('/api/user/:userId', findUserById);
    app.post('/api/logout', logoutUser);
    app.get('/api/profile/:username', profileUser);
    app.put('/api/update/:userId', updateUser);
    app.put('/api/update/session/:userId', updateUserSession);
    app.delete('/api/delete/:userId', deleteUser);
    app.get('/api/admin/number', numberOfAdmins);
}


