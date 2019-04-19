const userModel = require('../models/user.model.server')

createUser = user =>{
    user.isAdmin=false;
    return userModel.create(user)
}
findAllUsers = () =>
    userModel.find()

findUserById = userId =>
    userModel.findById(userId)

findUserByUsername = username =>
    userModel.findOne({username: username})

updateUser = (uid, user) =>
    userModel
        .update({_id: uid},
                {$set: user})

makeAdmin = username =>
    userModel.update({username: username},{isAdmin: true})

deleteUser = userId =>
    userModel
        .remove({_id: userId})

loginUser = (username,password) =>
    userModel.find({username:username,
                   password:password});

numberOfAdmins = () =>
    userModel.find({isAdmin: true})



module.exports = {
    createUser,
    deleteUser,
    findUserByUsername,
    findAllUsers,
    updateUser,
    findUserById,
    loginUser,
    makeAdmin,
    numberOfAdmins
}


