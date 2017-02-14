var express = require('express');
var router = express.Router();

var yt = require('../lib/youtube');

/* GET users listing. */
router.get('/search', function(req, res, next) {
  if (!global.initialTokens) {
    res.redirect('/oauth2');
    return;
  }

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
      var data = item.snippet;
      return {
        id: item.id.videoId,
        data: {
          title: data.title,
          description: data.description,
          thumbnail: data.thumbnails.high
        }
      };
    });
    res.json(videos);
  });
});

module.exports = router;
