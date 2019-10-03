const functions = require('firebase-functions');

//Funções
//Funções - Login Config
const login = require('./src/auth/login');

//Funções - User Config
const userRegister = require('./src/registration/user');
const userDetail = require('./src/detail/user');
const userUpdate = require('./src/update/user');

//Funções - House Config
const houseRegister = require('./src/registration/house');

const houseList = require('./src/registration/houseList');
const houseUpdate = require('./src/registration/houseUpdate');
const teste = require('./src/registration/teste');

module.exports = {
	'houseRegister': functions.https.onRequest(houseRegister),
	'houseList': functions.https.onRequest(houseList),
	'houseUpdate': functions.https.onRequest(houseUpdate),
	'teste': functions.https.onRequest(teste),
	'login': functions.https.onRequest(login),
	'userRegister': functions.https.onRequest(userRegister),
	'userDetail': functions.https.onRequest(userDetail),
	'userUpdate': functions.https.onRequest(userUpdate),
};