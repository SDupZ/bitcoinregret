const { hostname } = window.location;

let api;

switch (hostname) {
  case 'localhost':
      api = 'http://localhost:3005';
      break;
  case 'www.bitcoinregret.net':
  case 'bitcoinregret.net':
  default:
    api = 'https://bitcoinregret-api.herokuapp.com'
    break;
}

module.exports = {
  api,
};
