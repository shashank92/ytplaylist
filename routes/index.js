var express = require('express');
var router = express.Router();

var fs = require('fs');
var storedTokens = require('../tokens') || null;
console.log('STORED TOKENS:');
console.log(storedTokens);

var oauth2Client = require('../lib/oauth2-client');

router.get('/', function(req, res) {
  if (!storedTokens) {
    res.redirect('/oauth2');
    return;
  }

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
      var tokensJson = JSON.stringify(tokens, null, 2);

      fs.writeFile('tokens.json', tokensJson, function(err) {
        if (err) {
          next(err);
          return;
        }

        storedTokens = tokens;

        oauth2Client.setCredentials({
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token
        });

        res.redirect('/');
        console.log('redirecting...');
      });
    }
  });
});

module.exports = router;
