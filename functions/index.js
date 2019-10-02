const functions = require('firebase-functions');

//Funções
//const login = require('./src/registration/login');
const houseRegister = require('./src/registration/houseRegister');
const houseList = require('./src/registration/houseList');
const houseUpdate = require('./src/registration/houseUpdate');
const teste = require('./src/registration/teste');
const login = require('./src/auth/login');

module.exports = {
	//'login': functions.https.onRequest(login),
	'houseRegister': functions.https.onRequest(houseRegister),
	'houseList': functions.https.onRequest(houseList),
	'houseUpdate': functions.https.onRequest(houseUpdate),
	'teste': functions.https.onRequest(teste),
	'login': functions.https.onRequest(login),
};