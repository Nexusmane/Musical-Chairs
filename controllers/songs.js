const Song = require('../models/song')


module.exports = {
    new: newSong,
    index, 
    show, 
    create
};


function newSong(req, res) {

};

function index(req, res) {
    res.render('songs/index', { title: 'All songs' });
    };

function show(req, res) {

};

function create(req, res) {
    
};