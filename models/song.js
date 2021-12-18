const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    songName: {
      type: String, 
      required: true
    },
    artist: {
      type: String,
      required: true,
    },
    songDescription: {
      type: String, 
    },
}, 
    {
    timestamps: true
    }
);


  module.exports = mongoose.model("Song", songSchema);