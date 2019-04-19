const mongoose = require('mongoose')
const guestSchema = require('../schemas/guest.schema.server')
const guestModel = mongoose.model('GuestModel', guestSchema)
module.exports = guestModel;