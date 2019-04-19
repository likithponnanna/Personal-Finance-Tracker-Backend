const creditCardModel = require('../models/creditCard.model.server')

createCreditCard = (creditCard,userId) =>{
    // console.log(user._id);
    creditCard.user = userId;
    return creditCardModel.create(creditCard);
}


findAllCreditCards = (userId) =>
    creditCardModel.find({"user":userId}).populate('user').exec();


// populateProductToGuest = name =>
//     guestModel.findOne({user: name})
//         .populate('product').exec()


findCreditCardById = creditCardId =>
    creditCardModel.find({_id: creditCardId})

updateCreditCard = (creditCardId, creditCard) =>
    creditCardModel.update({_id: creditCardId}, {$set: creditCard})

deleteCreditCard = creditCardId =>
    creditCardModel.remove({_id: creditCardId})

module.exports = {
    createCreditCard,
    findAllCreditCards,
    findCreditCardById,
    updateCreditCard,
    deleteCreditCard
}