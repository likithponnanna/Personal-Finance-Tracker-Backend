const mongoose = require('mongoose');
const savingAccntSchema = mongoose.Schema({
                                                _id: false,
                                                minBal:0 //required false???
                                            }, {collection: 'account'});
module.exports = savingAccntSchema;