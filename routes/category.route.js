const express = require('express');
const router = express.Router();

// Require controllers
const categoryController = require('./controllers/category.controller');

// test url
router.get('/test', categoryController.test);

module.exports = router;
