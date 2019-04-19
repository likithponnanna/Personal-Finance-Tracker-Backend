const guestModel = require('../models/guest.model.server')

createGuest = guest =>{
    guest.status="PENDING"
    return guestModel.create(guest)
}

findAllGuests = () =>
    guestModel.find().populate('product').exec();

findGuestById = guestId =>
    guestModel.find({_id: guestId}).populate('product').exec();

updateGuest = (guestId, guest) =>
    guestModel.update({_id: guestId}, {$set: guest})

updateGuestApprove = (guestId, guest) => {
    guest.status="APPROVED"
    return guestModel.update({_id: guestId}, {$set: guest})
}
updateGuestReject = (guestId, guest) =>{
    guest.status="REJECTED"
    return guestModel.update({_id: guestId}, {$set: guest})
}

deleteGuest = guestId =>
    guestModel.remove({_id: guestId})

populateProductToGuest = name =>
    guestModel.findOne({firstName: name})
        .populate('product').exec()

findAllPendingGuests = () =>
    guestModel.find({status:"PENDING"}).populate('product').exec();

findAllApproveGuests = () =>
    guestModel.find({status:"APPROVED"}).populate('product').exec();

findAllRejectGuests = () =>
    guestModel.find({status:"REJECTED"}).populate('product').exec();

module.exports = {
    createGuest,
    findAllGuests,
    findGuestById,
    updateGuest,
    deleteGuest,
    populateProductToGuest,
    updateGuestApprove,
    updateGuestReject,
    findAllPendingGuests,
    findAllApproveGuests,
    findAllRejectGuests
}
