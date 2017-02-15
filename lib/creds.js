var fs = require('fs');

var creds;
try {
  creds = JSON.parse(fs.readFileSync('creds.json'));
} catch(e) {
  creds = null;
}

module.exports = creds;
