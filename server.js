const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/howtos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});


// Routes
require('./routes/category.route')(app);

// let categorySchema = require('./models/category.model');

// const categoryRoutes = require('./routes/category.route');
// app.use('/categories', categoryRoutes);



// Controllers
const categoryController = require('./controllers/category.controller');

// categoryRoutes.route('/').get(function(req, res) {
//   categorySchema.find(function(err, categories) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json("Hello!");
//     }
//   });
// });



app.listen(PORT, function() {
  console.log("Server is running on PORT: " + PORT);
});