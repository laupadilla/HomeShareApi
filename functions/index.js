const functions = require('firebase-functions');

//Funções
const login = require('./src/registration/login');
const houseRegister = require('./src/registration/houseRegister');

module.exports = {
	'login': functions.https.onRequest(login),
	'houseRegister': functions.https.onRequest(houseRegister)
};