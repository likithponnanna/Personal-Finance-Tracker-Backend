const mongoose = require('mongoose')
const budgetSchema = require('../schemas/budget.schema.server')
const budgetModel = mongoose.model('BudgetModel', budgetSchema)
module.exports = budgetModel;
