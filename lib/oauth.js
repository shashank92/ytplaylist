var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
  '431035499889-7uq2rnu70ratkicg4umlaqphga7g9aoh.apps.googleusercontent.com',
  'ayls_lGW4EZbq_UDaHAExgN9',
  'http://localhost:3000/oauth2callback'
);

var authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
});

var youtube = google.youtube({
  version: 'v3',
  auth: oauth2Client
});

module.exports = {
  oauth2Client: oauth2Client,
  authUrl: authUrl,
  youtube: youtube
};
