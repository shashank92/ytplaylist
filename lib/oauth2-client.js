var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var creds = require('./creds');

var oauth2Client = new OAuth2(
  '431035499889-7uq2rnu70ratkicg4umlaqphga7g9aoh.apps.googleusercontent.com',
  'ayls_lGW4EZbq_UDaHAExgN9',
  'http://localhost:3000/oauth2callback'
);

if (creds) {
  oauth2Client.setCredentials({
    access_token: creds.access_token,
    refresh_token: creds.refresh_token
  });
}

module.exports = oauth2Client;
