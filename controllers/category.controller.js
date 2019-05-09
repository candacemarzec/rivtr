const mongoose = require('mongoose');
const category = require('../models/category.model');

exports.categories = function(req, res) {
  res.send('Hello from the controller!');
};

