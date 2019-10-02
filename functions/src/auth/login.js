const {
	db,
} = require('../../src/db');
const admin = require('firebase-admin');


const login = (req, res) => {
	let idToken = req.body.idToken;

	admin.auth().verifyIdToken(idToken)
	.then(function(decodedToken) { 
		let uid = decodedToken.uid;
		res.json(
		{ 
			status: 'Autenticado',
			idToken: uid
		});

		return 'ok';
	}).catch(function(error) {
		res.json(
		{ 
			status: 'Erro',
			mensagem: error
		});
		return 'erro';
	});
};

module.exports = login;