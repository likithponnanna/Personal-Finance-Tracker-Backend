const transactionModel = require('../models/transaction.model.server')

createTransaction = (transaction, userId) => {
    transaction.user = userId;
    return transactionModel.create(transaction);
}

findAllTransactions = (userId) =>
    transactionModel.find({"user":userId}).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllCategoryTransactions = (userId, category) =>
    transactionModel.find({"user":userId, "category":category}).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionsAdmin = () =>
    transactionModel.find().sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionWeek = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 7))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionMonth = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 30))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllCategoryMonthTransactions = (userId, category) =>
    transactionModel.find({
        "user":userId,
        "category":category,
        "date_of_transaction": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 30))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionHalfYear = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 183))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionTwoMonth = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(new Date().setDate(new Date().getDate() - 30)),
            $gte: new Date(new Date().setDate(new Date().getDate() - 60))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionThreeMonth = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(new Date().setDate(new Date().getDate() - 60)),
            $gte: new Date(new Date().setDate(new Date().getDate() - 90))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionFourMonth = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(new Date().setDate(new Date().getDate() - 90)),
            $gte: new Date(new Date().setDate(new Date().getDate() - 120))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionFiveMonth = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(new Date().setDate(new Date().getDate() - 120)),
            $gte: new Date(new Date().setDate(new Date().getDate() - 150))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionSixMonth = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(new Date().setDate(new Date().getDate() - 150)),
            $gte: new Date(new Date().setDate(new Date().getDate() - 180))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findAllTransactionYear = (userId) =>
    transactionModel.find({
        "user":userId,
        "date_of_transaction": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 365))
        }
    }).sort({"date_of_transaction": 'descending'}).populate('user').exec();

findTransactionById = transactionId =>
    transactionModel.findById(transactionId).populate('user').exec();

updateTransaction = (transactionId, transaction) =>
    transactionModel.update({_id: transactionId}, {$set: transaction});

deleteTransaction = transactionId =>
    transactionModel.remove({_id: transactionId})

module.exports = {
    createTransaction,
    findAllTransactions,
    findAllCategoryTransactions,
    findTransactionById,
    updateTransaction,
    deleteTransaction,
    findAllTransactionWeek,
    findAllTransactionMonth,
    findAllTransactionTwoMonth,
    findAllTransactionThreeMonth,
    findAllTransactionFourMonth,
    findAllTransactionFiveMonth,
    findAllTransactionHalfYear,
    findAllTransactionYear,
    findAllTransactionsAdmin,
    findAllCategoryMonthTransactions,
    findAllTransactionSixMonth
}
