const {
	db,
} = require('../../src/db');
const admin = require('firebase-admin');

const userRegister = (req, res) => {
	
	admin.auth()
  	.verifyIdToken(req.body.idToken)
	.then(function(decodedToken) {
    	let uid = decodedToken.uid;
		
		// if(req.body.senha !== req.body.confirmacaosenha){
		// 	res.json({ status: 'Confirmação de senha não corresponde!'});
		// 	return 'erro';
		// }
		let data = {
			NomeCompleto: req.body.nomecompleto,
			NomeUsuario: req.body.nomeusuario,
			Email: req.body.email,
			Senha: req.body.senha,
			ConfirmacaoSenha: req.body.confirmacaosenha,
			DataNascimento: req.body.datanascimento,
			Estado: req.body.estado,
			Cidade: req.body.cidade,
			idCasa: false,
			Chats: false
		};

		let updates = {};
		updates['/Usuarios/' + uid] = data;	
		
		db.ref().update(updates).then(response => {
			res.json(
				{ 
					status: 'Ok',
					idUser: uid
				});

			return 'Ok';
		})
		.catch(response => {
			res.json(
				{ 
					status: 'erro - ' + response.message 
				});

			return 'erro';
		});
		
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

module.exports = userRegister;