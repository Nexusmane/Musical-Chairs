var express = require('express');
var router = express.Router();
const songsCtrl = require('../controllers/songs');
const isLoggedIn = require('../config/auth');

// All paths have /songs prefixed

// GET "/songs/new" - New Route
router.get('/new', isLoggedIn, songsCtrl.new);

// POST "/songs" - Create Route
router.post('/', isLoggedIn, songsCtrl.create);

// GET "/songs" - Index Route
router.get('/', songsCtrl.index);

// GET "/songs/:id" - Show Route
router.get('/:id', songsCtrl.show);


module.exports = router;
