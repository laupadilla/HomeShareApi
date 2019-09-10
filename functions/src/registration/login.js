const {
	db,
} = require('../../src/db');

const login = (req, res) => {
	let userName = req.headers['user-name'];
	let userPass = req.headers['user-pass'];
	let retorno = 'erro';
	var query = db.ref('/Users').orderByKey();	
	
	query.on('value', function(dataSnapshot){
		dataSnapshot.forEach(function(snapshot){
			var data = snapshot.val();
			if(data.Usuario === userName && data.Senha === userPass)
				retorno = data.Perfil;
		})
		res.json(retorno);
	},function (errorObject) {
		res.send("The read failed: " + errorObject.code);
	});
};

module.exports = login;