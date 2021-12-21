const Playlist = require('../models/playlist');
const Song = require('../models/song');

module.exports = {
    new: newPlaylist,
    index, 
    show, 
    create
};


function newPlaylist(req, res) {
        res.render('playlists/new', { title: 'Add A New Playlist' });
}

function index(req, res) {
    Playlist.find({}, function(err, playlists) {
    res.render('playlists/index', { title: 'All Playlists', playlists });
    })
};

function show(req, res) {
    Playlist.findById(req.params.id, function (err, playlists) {
        console.log(playlists);
        res.render('playlists/show', {title: "Playlist Details", playlists });
    });
};


function create(req, res) {
    const playlist = new Playlist(req.body);
    playlist.save(function(err) {
        if (err) {
        console.log(err);
        return res.redirect("/playlists/new");
        }
        console.log(playlist);
        res.redirect("/playlists");
    })
};