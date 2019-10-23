const {
	db,
} = require('../../src/db');
const admin = require('firebase-admin');

const login = (req, res) => {
	let idToken = req.body.idToken;

	admin.auth().verifyIdToken(idToken)
	.then(function(decodedToken) {
		let uid = decodedToken.uid;
		let ref = db.ref('Usuarios/' + uid);
		let user;

		ref.once('value')
		.then(function(dataSnapshot) {
			user = dataSnapshot.val();
			
			return 'ok';
		}).catch(function(error) {
			res.json({ status: 'Erro', mensagem: error });
	
			return 'erro';
		});

		res.json({ status: 'Autenticado', user: user });

		return 'ok';
	}).catch(function(error) {
		res.json({ status: 'Erro', mensagem: error });

		return 'erro';
	});
};

module.exports = login;