const accountModel = require('../models/account.model.server')

createAccount = (account,userId) => {
    account.user = userId;
    return accountModel.create(account)
}

findAllAccounts = (userId) =>
    accountModel.find({"user":userId}).populate('user').exec();

findAccountById = accountId =>
    accountModel.find({_id: accountId})

updateAccount = (accountId, account) =>
    accountModel.update({_id: accountId}, {$set: account})

deleteAccount = accountId =>
    accountModel.remove({_id: accountId})



createSavingAccount = (account,userId) => {
    account.user = userId;
    account.type = 'SAVING'
    return accountModel.create(account)
}

findAllSavingAccounts = (userId) =>
    accountModel.find({"user":userId, type:'SAVING'}).populate('user').exec();

findSavingAccountById = accountId =>
    accountModel.find({_id: accountId, type:'SAVING'})

updateSavingAccount = (accountId, account) =>
    accountModel.update({_id: accountId, type:'SAVING'}, {$set: account})

deleteSavingAccount = accountId =>
    accountModel.remove({_id: accountId, type:'SAVING'})


createCheckingAccount = (account,userId) => {
    account.user = userId;
    account.type = 'CHECKING'
    return accountModel.create(account)
}

findAllCheckingAccounts = (userId) =>
    accountModel.find({"user":userId, type:'CHECKING'}).populate('user').exec();

findCheckingAccountById = accountId =>
    accountModel.find({_id: accountId, type:'CHECKING'})

updateCheckingAccount = (accountId, account) =>
    accountModel.update({_id: accountId, type:'CHECKING'}, {$set: account})

deleteCheckingAccount = accountId =>
    accountModel.remove({_id: accountId, type:'CHECKING'})

module.exports = {
    createAccount,
    findAllAccounts,
    findAccountById,
    updateAccount,
    deleteAccount,
    createSavingAccount,
    findAllSavingAccounts,
    findSavingAccountById,
    updateSavingAccount,
    deleteSavingAccount,
    createCheckingAccount,
    findAllCheckingAccounts,
    findCheckingAccountById,
    updateCheckingAccount,
    deleteCheckingAccount
}
