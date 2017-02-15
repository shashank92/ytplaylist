var express = require('express');
var router = express.Router();

var yt = require('../lib/youtube');

router.get('/search', function(req, res, next) {
  yt.search.list({
    q: req.query.q,
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    safeSearch: 'none',
    videoDefinition: 'high',
    videoEmbeddable: 'true',
    videoSyndicated: 'true'
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
  res.json({bilbo: 'baggins'});
});

module.exports = router;
