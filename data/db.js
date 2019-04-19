module.exports = function () {
  const mongoose = require('mongoose');
  // const databaseName = 'project';
  var connectionString =
    'mongodb://heroku_fvzpd05d:o4v6taoivmeqmvlqe334t5cck6@ds145659.mlab.com:45659/heroku_fvzpd05d';
  // connectionString += databaseName;
  mongoose.connect(connectionString);
};
