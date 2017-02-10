var tokensJson = window.tokensJson = document.getElementById('tokens-json').text;
window.sessionStorage.setItem('tokensJson', tokensJson);

// Disable this if you need to test
window.location = '/';
