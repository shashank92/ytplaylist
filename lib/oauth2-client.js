var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var fs = require('fs');

var oauth2Client = new OAuth2(
  '431035499889-7uq2rnu70ratkicg4umlaqphga7g9aoh.apps.googleusercontent.com',
  'ayls_lGW4EZbq_UDaHAExgN9',
  'http://localhost:3000/oauth2callback'
);

try {
  var tokens = JSON.parse(fs.readFileSync('tokens.json'));

  oauth2Client.setCredentials({
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token
  });
} catch(e) {}

module.exports = oauth2Client;
