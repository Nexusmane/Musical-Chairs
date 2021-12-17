const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    playlistName: {
        type: String, 
        required: true
    },
    genre: {
      type: String,
      required: true,
    },
    playlistDescription: {
        type: String, 
  },
}, 
    {
    timestamps: true
    }
  );


  module.exports = mongoose.model("Playlist", playlistSchema);