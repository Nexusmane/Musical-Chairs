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
    playlistId: {
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }
}, 
    {
    timestamps: true
    }
);


  module.exports = mongoose.model("Song", songSchema);