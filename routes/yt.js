var express = require('express');
var router = express.Router();

var yt = require('../lib/youtube');

router.get('/search', function(req, res, next) {
  yt.search.list({
    q: req.query.q,
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    safeSearch: 'none'
  }, function(err, json) {
    if (err) {
      next(err);
      return;
    }

    var videos = json.items.map(function(item) {
      var snippet = item.snippet;
      return {
        id: item.id.videoId,
        title: snippet.title,
        description: snippet.description,
        thumbnail: snippet.thumbnails.high
      };
    });

    res.json(videos);
  });
});

router.get('/playlists', function(req, res, next) {
  yt.playlists.list({
    part: 'snippet',
    mine: true
  }, function(err, json) {
    if (err) {
      next(err);
      return;
    }

    var playlists = json.items.map(function(item) {
      var snippet = item.snippet;
      return {
        id: item.id,
        title: snippet.title,
        description: snippet.description,
        thumbnail: snippet.thumbnails.high
      };
    });

    res.json(playlists);
  });
});

router.get('/playlistitems/:playlistid', function(req, res, next) {
  yt.playlistItems.list({
    part: 'snippet',
    mine: true
  }, function(err, json) {
    if (err) {
      next(err);
      return;
    }

    res.json(json);
  });
});

module.exports = router;
