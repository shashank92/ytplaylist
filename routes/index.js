var express = require('express');
var router = express.Router();

var fs = require('fs');
var oauth2Client = require('../lib/oauth2-client');

router.get('/', function(req, res) {
  res.render('index', {
    title: 'ytplaylist'
  });
});

router.get('/oauth2', function(req, res) {
  res.redirect(oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
  }));
});

router.get('/oauth2callback', function(req, res, next) {
  oauth2Client.getToken(req.query.code, function (err, tokens) {
    if (err) {
      next(err);
    } else {
      oauth2Client.setCredentials({
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token
      });

      res.redirect('/');

      var tokensJson = JSON.stringify(tokens, null, 2);
      fs.writeFileSync('tokens.json', tokensJson);
    }
  });
});

module.exports = router;
