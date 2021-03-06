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
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    songId: [{
      type: Schema.Types.ObjectId,
      ref: 'Song'
    }]
  }, 
    {
    timestamps: true
    }
  );


  module.exports = mongoose.model("Playlist", playlistSchema);

  