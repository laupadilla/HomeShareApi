const functions = require('firebase-functions');

//Funções
const login = require('./src/registration/login');
  
module.exports = {
	'login': functions.https.onRequest(login)
};