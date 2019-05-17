const mongoose = require('mongoose');
const category = require('../models/category.model');

exports.category_list = function(req, res) {
  res.send('Hello from the controller!');
};

