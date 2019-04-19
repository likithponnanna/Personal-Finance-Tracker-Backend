const billsModel = require('../models/bills.model.server')

createBill = (bill, userId) => {
    bill.user = userId;
    return billsModel.create(bill);
}

createBillAdmin = (bill) => {
    return billsModel.create(bill);
}

findAllBills = (userId) =>
    billsModel.find({"user": userId}).populate('user').exec();

findAllBillsAdmin = () =>
    billsModel.find().populate('user').exec();

findBillsByUserId = (userId) =>
    billsModel.find({"user": userId}).populate('user').exec();

findBillById = billId =>
    billsModel.findById(billId).populate('user').exec();

updateBill = (billId, bill) =>
    billsModel.update({_id: billId}, {$set: bill});

deleteBill = billId =>
    billsModel.remove({_id: billId})

pendingBills = (userId) =>
    billsModel.find({"user": userId, "bill_pending": true}).populate('user').exec();

paidBills = (userId) =>
    billsModel.find({"user": userId, "bill_pending": false}).populate('user').exec();

findAllBillsWeekDue = (userId) =>
    billsModel.find({
        "user": userId,
        "bill_pending": true,
        "bill_due_date": {
            $gte: new Date(),
            $lt: new Date(new Date().setDate(new Date().getDate() + 7))
        }
    }).sort({"bill_due_date": 'descending'}).populate('user').exec();

findAllBillsMonthDue = (userId) =>
    billsModel.find({
        "user":userId,
        "bill_pending": true,
        "bill_due_date": {
            $gte: new Date(),
            $lt: new Date(new Date().setDate(new Date().getDate() + 30))
        }
    }).sort({"bill_due_date": 'descending'}).populate('user').exec();

findAllBillsYearDue = (userId) =>
    billsModel.find({
        "user":userId,
        "bill_pending": true,
        "bill_due_date": {
            $gte: new Date(),
            $lt: new Date(new Date().setDate(new Date().getDate() + 365))
        }
    }).sort({"bill_due_date": 'descending'}).populate('user').exec();

findAllBillsWeekPosted = (userId) =>
    billsModel.find({
        "user":userId,
        "bill_posted_date": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 7))
        }
    }).sort({"bill_posted_date": 'descending'}).populate('user').exec();

findAllBillsMonthPosted = (userId) =>
    billsModel.find({
        "user":userId,
        "bill_posted_date": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 30))
        }
    }).sort({"bill_posted_date": 'descending'}).populate('user').exec();

findAllBillsYearPosted = (userId) =>
    billsModel.find({
        "user":userId,
        "bill_posted_date": {
            $lt: new Date(),
            $gte: new Date(new Date().setDate(new Date().getDate() - 365))
        }
    }).sort({"bill_posted_date": 'descending'}).populate('user').exec();

module.exports = {
    createBill,
    findAllBills,
    findBillById,
    updateBill,
    deleteBill,
    pendingBills,
    paidBills,
    findAllBillsWeekDue,
    findAllBillsMonthDue,
    findAllBillsYearDue,
    findAllBillsWeekPosted,
    findAllBillsMonthPosted,
    findAllBillsYearPosted,
    findAllBillsAdmin,
    createBillAdmin,
    findBillsByUserId
}
