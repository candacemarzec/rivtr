const express = require('express');
const router = express.Router();

// Require controllers
const categoryController = require('../controllers/category.controller');



router.get('/', categoryController.category_list);
module.exports = router; 

// module.exports = function(app) {
//   app.get('/categories', function(req, res) {
//     var err = new Error;
//     res.status(err.status || 500);
//     res.json({
//       message: 'Hello!'
//     });
//   });

//   //other routes..
// };

