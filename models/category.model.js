const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  name: {
    type: String
  }
});

// I believe this line establishes the connection to the server.js file. Checking syntax.
module.exports = mongoose.model('category', categorySchema);