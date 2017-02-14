var google = require('googleapis');
var oauth2Client = require('./oauth2-client');

module.exports = google.youtube({
  version: 'v3',
  auth: oauth2Client
});
