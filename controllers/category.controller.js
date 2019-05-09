const mongoose = require('mongoose');
const category = require('../models/category.model');

module.exports = function(req, res) {
  res.send('Greetings from the test controller');
};
  