var express = require('express');
var router = express.Router();
const playlistsCtrl = require('../controllers/playlists');
const isLoggedIn = require('../config/auth');

// All paths have /playlists prefixed

// GET "/playlists/new" - New Route
router.get('/new', isLoggedIn, playlistsCtrl.new);

// POST "/playlists" - Create Route
router.post('/', isLoggedIn, playlistsCtrl.create);

// GET "/playlists" - Index Route
router.get('/', playlistsCtrl.index);

// GET "/playlists/:id" - Show Route
router.get('/:id', isLoggedIn, playlistsCtrl.show);

// DELETE "/playlists"
router.delete('/:id', isLoggedIn, playlistsCtrl.delete)

// PUT "/playlists/:id" - Update playlist
router.post('/:id', isLoggedIn, playlistsCtrl.update);


module.exports = router;