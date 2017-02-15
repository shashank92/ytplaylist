var express = require('express');
var router = express.Router();

var fs = require('fs');
var creds = require('../lib/creds');
var oauth2Client = require('../lib/oauth2-client');

router.get('/', function(req, res) {
  if (!creds || (creds.expiry_date <= Date.now())) {
    res.redirect('/oauth2');
  } else {
    res.render('index', {
      title: 'ytplaylist'
    });
  }
});

router.get('/oauth2', function(req, res) {
  res.redirect(oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
  }));
});

router.get('/oauth2callback', function(req, res, next) {
  res.redirect('/');

  oauth2Client.getToken(req.query.code, function (err, creds) {
    if (err) {
      throw err;
    } else {
      oauth2Client.setCredentials({
        access_token: creds.access_token,
        refresh_token: creds.refresh_token
      });

      var credsJson = JSON.stringify(creds, null, 2);
      fs.writeFileSync('creds.json', credsJson);
    }
  });
});

module.exports = router;
