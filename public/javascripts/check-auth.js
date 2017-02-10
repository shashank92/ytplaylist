var tokensJson = window.sessionStorage.getItem('tokensJson');

if (tokensJson) {
  try {
    var tokens = JSON.parse(tokensJson);
    console.log(tokens);

    // redirect if token is expired
    if (+(new Date()) >= tokens.expiry_date) {
      window.location = '/oauth2';
    }

  } catch(e) {
    console.log('Something terrible has happened');
    sessionStorage.clear();
  }
} else {
  window.location = '/oauth2';
}
