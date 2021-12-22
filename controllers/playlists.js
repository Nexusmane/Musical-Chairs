const Playlist = require('../models/playlist');
const Song = require('../models/song');

module.exports = {
    new: newPlaylist,
    index, 
    show, 
    create,
    delete: deletePlaylist,
    update: updatePlaylist,
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
    Playlist.findById(req.params.id).populate("songId").exec(function (err, playlists) {
        Song.find({}, function(err, songs) {
            res.render('playlists/show', {title: "Playlist Details", playlists, songs });
        })
    }
)};



function create(req, res) {
    const playlist = new Playlist(req.body);
    playlist.save(function(err) {
        if (err) {
        console.log(err);
        return res.redirect("/playlists/new");
        }
        res.redirect("/playlists");
    })
};

function deletePlaylist(req, res) {
    console.log('running delete');
    Playlist.deleteOne({ _id:req.params.id }, function(err, playlist) {
    // if (!playlist.user.equals(req.user.id(req.params.id)))
        return res.redirect('/playlists');
    })
};

function updatePlaylist(req, res) {
    Playlist.findById(req.params.id, function(err, playlist) {
        Song.findById(req.body.addSongToList, function(err, song) {
            playlist.songId.push(song);
            playlist.save(function(err) {
                if (err) console.log(err);
                res.redirect(`/playlists/${playlist._id}`)
            });
        })
    })
}