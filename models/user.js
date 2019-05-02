const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  name: {
    type: String
  },
  password_digest: {
    type: String
  }
});

// I believe this line establishes the connection to the server.js file. Checking syntax.
// module.exports = mongoose.model('User', User);