const functions = require('firebase-functions');

//Funções
const houseRegister = require('./src/registration/houseRegister');
const houseList = require('./src/registration/houseList');
const houseUpdate = require('./src/registration/houseUpdate');
const teste = require('./src/registration/teste');
const login = require('./src/auth/login');
const userRegister = require('./src/registration/userRegister');
const userDetail = require('./src/detail/user');


module.exports = {
	'houseRegister': functions.https.onRequest(houseRegister),
	'houseList': functions.https.onRequest(houseList),
	'houseUpdate': functions.https.onRequest(houseUpdate),
	'teste': functions.https.onRequest(teste),
	'login': functions.https.onRequest(login),
	'userRegister': functions.https.onRequest(userRegister),
	'userDetail': functions.https.onRequest(userDetail),
};