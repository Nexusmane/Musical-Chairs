const Song = require('../models/song')
const Playlist = require('../models/playlist');

module.exports = {
    new: newSong,
    create,
};

function newSong(req, res) {
    Playlist.find({}, function(err, playlists) {
    res.render('songs/new', { title: 'Add A New Song', playlists });
    })
};

function create(req, res) {
    const song = new Song(req.body);
    song.save(function(err) {
        if (err) {
        console.log(err);
        return res.redirect("/songs/new");
        }
        Playlist.findById(req.body.addToPlaylist, function(err, playlist) {
            playlist.songId.push(song);
            playlist.save(function(err) {
                if (err) console.log(err);
                res.redirect(`/playlists/${playlist._id}`)
            })
        });
    })
};