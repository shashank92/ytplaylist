var express = require('express');
var router = express.Router();

var Google = require('googleapis');
var OAuth2 = Google.auth.OAuth2;

var oauth2Client = new OAuth2(
  '431035499889-7uq2rnu70ratkicg4umlaqphga7g9aoh.apps.googleusercontent.com',
  'ayls_lGW4EZbq_UDaHAExgN9',
  'http://localhost:3000/oauth2callback'
);

var url = oauth2Client.generateAuthUrl({
  scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
});

router.get('/', function(req, res) {
  res.redirect(url);
});

router.get('/oauth2callback', function(req, res, next) {
  oauth2Client.getToken(req.query.code, function (err, tokens) {
    if (err) {
      next(err);
    } else {
      oauth2Client.setCredentials(tokens);
      // res.render('index', { title: 'ytplaylist' });
      res.json(tokens);
    }
  });
});

module.exports = router;
