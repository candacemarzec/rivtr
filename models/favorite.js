const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Favorite = new Schema({
  user_id: {
    type: Number
  },
  video_id: {
    type: Number
  }
});

// I believe this line establishes the connection to the server.js file. Checking syntax.
// module.exports = mongoose.model('Favorite', Favorite);