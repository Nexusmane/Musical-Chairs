const Song = require('../models/song')
const Playlist = require('../models/playlist');


module.exports = {
    new: newSong,
    index, 
    show, 
    create
};


function newSong(req, res) {
    Playlist.find({}, function(err, playlists) {
    res.render('songs/new', { title: 'Add A New Song', playlists });
    })
};

function index(req, res) {
    res.render('songs/index', { title: 'All songs' });
    };

function show(req, res) {
    Song.findById(req.params.id, function (err, song) {
        res.render('songs/show', {title: "Song Details", song });
    });
};

function create(req, res) {
    const song = new Song(req.body);
    Playlist.songId.push(song);
    song.save(function(err) {
        if (err) {
        console.log(err);
        return res.redirect("/songs/new");
        }
        console.log(song);
        res.redirect("/playlists");
    })
};