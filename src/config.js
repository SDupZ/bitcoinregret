require('dotenv').config();
const { APP_ENV } = process.env;

let api;

switch (APP_ENV) {
  case 'prod':
    api = 'todo'
    break;
  case 'dev':
  default:
    api = 'http://localhost:3005'
    break;
}


module.exports = {
  api,
};
