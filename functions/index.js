const functions = require('firebase-functions');

//Funções
const login = require('./src/registration/login');
const houseRegister = require('./src/registration/houseRegister');
const teste = require('./src/registration/teste');

module.exports = {
	'login': functions.https.onRequest(login),
	'houseRegister': functions.https.onRequest(houseRegister),
	'teste': functions.https.onRequest(teste),
};