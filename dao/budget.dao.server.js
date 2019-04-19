const budgetModel = require('../models/budget.model.server')

createBudget = (budget, userId) => {
    budget.user = userId;
    return budgetModel.create(budget);
}

findAllBudget = (userId) =>
    budgetModel.find({"user": userId}).populate('user').exec();

findAllBudgetAdmin = () =>
    budgetModel.find().populate('user').exec();

findBudgetById = budgetId =>
    budgetModel.find({_id: budgetId})

updateBudget = (budgetId, budget, userId) => {
    budget.user = userId
    return budgetModel.update({_id: budgetId}, {$set: budget})
}
deleteBudget = budgetId =>
    budgetModel.remove({_id: budgetId})

findBudgetByMonth = (userId, month) =>
    budgetModel.find({"user":userId, "month": month})

module.exports = {
    createBudget,
    findAllBudget,
    findAllBudgetAdmin,
    findBudgetById,
    updateBudget,
    deleteBudget,
    findBudgetByMonth
}
