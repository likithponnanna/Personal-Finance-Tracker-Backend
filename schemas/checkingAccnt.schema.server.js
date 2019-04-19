const mongoose = require('mongoose');
const checkingAccntSchema = mongoose.Schema({
                                          _id: false,
                                          minBal:100
                                      }, {collection: 'account'});
module.exports = checkingAccntSchema;