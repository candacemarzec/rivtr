const express = require('express');
const router = express.Router();

// Require controllers
const categoryController = require('../controllers/category.controller');

// test url
// router.get('/categories');

// module.exports = router; 

module.exports = function(app) {
  app.get('/categories', function(req, res) {
    var err = new Error;
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
      title: 'Category Get'
    });
  });

  //other routes..
};
