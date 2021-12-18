const Song = require('../models/song')


module.exports = {
    new: newSong,
    index, 
    show, 
    create
};


function newSong(req, res) {
    res.render('songs/new', { title: 'Add A New Song' });
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
    song.save(function(err) {
        if (err) {
        console.log(err);
        return res.redirect("/songs/new");
        }
        console.log(song);
        res.redirect("/songs");
    })
};