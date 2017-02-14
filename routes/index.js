var express = require('express');
var router = express.Router();

var oauth = require('../lib/oauth');
var oauth2Client = oauth.oauth2Client;
var authUrl = oauth.authUrl;

router.get('/', function(req, res) {
  if (!global.initialTokens) {
    res.redirect('/oauth2');
    return;
  }

  res.render('index', {
    title: 'ytplaylist'
  });
});

router.get('/oauth2', function(req, res) {
  res.redirect(authUrl);
});

router.get('/oauth2callback', function(req, res, next) {
  oauth2Client.getToken(req.query.code, function (err, tokens) {
    if (err) {
      next(err);
    } else {
      console.log('Tokens received:');
      console.log(tokens);

      global.initialTokens = tokens;

      oauth2Client.setCredentials({
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token
      });

      res.redirect('..');
    }
  });
});

module.exports = router;
