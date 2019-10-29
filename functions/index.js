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
const houseList = require('./src/list/house');
const houseDetail = require('./src/detail/house');

//Funções - Card Config
const cardRegister = require('./src/registration/card');
const cardDetail = require('./src/detail/card');
const cardList = require('./src/list/card');

//Funções - Task Config
const taskRegister = require('./src/registration/task');

const houseUpdate = require('./src/registration/houseUpdate');
const teste = require('./src/registration/teste');

module.exports = {
	'houseRegister': functions.https.onRequest(houseRegister),
	'houseList': functions.https.onRequest(houseList),
	'houseUpdate': functions.https.onRequest(houseUpdate),
	'houseDetail': functions.https.onRequest(houseDetail),
	'teste': functions.https.onRequest(teste),
	'login': functions.https.onRequest(login),
	'userRegister': functions.https.onRequest(userRegister),
	'userDetail': functions.https.onRequest(userDetail),
	'userUpdate': functions.https.onRequest(userUpdate),
	'cardRegister': functions.https.onRequest(cardRegister),
	'cardDetail': functions.https.onRequest(cardDetail),
	'cardList': functions.https.onRequest(cardList),
	'taskRegister': functions.https.onRequest(taskRegister)
};