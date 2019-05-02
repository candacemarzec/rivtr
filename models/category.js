const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Category = new Schema({
  name: {
    type: String
  }
});

// I believe this line establishes the connection to the server.js file. Checking syntax.
// module.exports = mongoose.model('Category', Category);