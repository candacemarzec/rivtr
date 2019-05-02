const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Video = new Schema({
  description: {
    type: String
  },
  url: {
    type: String
  },
  category_id: {
    type: Number
  }
});

// I believe this line establishes the connection to the server.js file. Checking syntax.
// module.exports = mongoose.model('Video', Video);