var fs = require('fs');

var creds;
try {
  creds = global.creds = JSON.parse(fs.readFileSync('creds.json'));
} catch(e) {
  creds = global.creds = null;
}

module.exports = creds;
