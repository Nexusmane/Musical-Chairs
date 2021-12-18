const Playlist = require('../models/playlist');

module.exports = {
    new: newPlaylist,
    index, 
    show, 
    create
};


function newPlaylist(req, res) {
    res.render('playlists/new', { title: 'Add A New Playlist' });
};

function index(req, res) {
    res.render('playlist/index', { title: 'All Playlists' });
};

function show(req, res) {
    Playlist.findById(req.params.id, function (err, playlist) {
        res.render('playlist/show', {title: "Playlist Details", playlist });
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
        res.redirect("/songs");
    })
};