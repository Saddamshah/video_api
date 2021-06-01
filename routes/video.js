const express = require('express');
const router = express.Router();
const { get_videos } = require('../controllers/video');


router.get('/videos', get_videos)


module.exports = router;