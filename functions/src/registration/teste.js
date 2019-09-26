const {
	db,
} = require('../../src/db');
const admin = require('firebase-admin');


const teste = (req, res) => {
	// idToken comes from the client app
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

module.exports = teste;