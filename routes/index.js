var express = require('express');
var router = express.Router();

var oauth = require('../lib/oauth');
var oauth2Client = oauth.oauth2Client;
var authUrl = oauth.authUrl;

router.get('/', function(req, res) {
  res.render('index', { title: 'ytplaylist' });
});

router.get('/oauth2', function(req, res) {
  res.redirect(authUrl);
});

router.get('/oauth2callback', function(req, res, next) {
  oauth2Client.getToken(req.query.code, function (err, tokens) {
    if (err) {
      next(err);
    } else {
      var tokensJson = JSON.stringify(tokens);

      res.render('oauth2callback', {
        tokens: tokensJson
      });
    }
  });
});

module.exports = router;
