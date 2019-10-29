const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');
const admin = require('firebase-admin');

router.post('/', function(req, res) {
	admin.auth()
  	.verifyIdToken(req.body.idToken)
	.then(function(decodedToken) {
    	let uid = decodedToken.uid,
			pendenteCadastroRef = db.ref('/PendenteCadastro/'),
			email = req.body.email,
			idCasa = null,
			casaParam = false;
	
		pendenteCadastroRef.once('value').then(dataSnapshot => {
			Object.entries(dataSnapshot.val()).forEach(([key, value]) => {
				if(value[0] === email){
					idCasa = key;
				}
			});
			if(idCasa !== null){
				casaParam = idCasa;
				db.ref('/Casas/' + casaParam + '/Pessoas/').push(uid);
				let pendenteCadastroRemoveRef = db.ref('/PendenteCadastro/' + casaParam);
				pendenteCadastroRemoveRef.remove();
			}

			setTimeout(()=>{
				let data = {
					NomeCompleto: req.body.nomecompleto,
					NomeUsuario: req.body.nomeusuario,
					Email: req.body.email,
					Senha: req.body.senha,
					ConfirmacaoSenha: req.body.confirmacaosenha,
					DataNascimento: req.body.datanascimento,
					Estado: req.body.estado,
					Cidade: req.body.cidade,
					idHouse: casaParam,
					Chats: false
				};
				let updates = {};
				let userObj = false;
				updates['/Usuarios/' + uid] = data;
	
				db.ref().update(updates)
				.then(response => {
					let query = db.ref('/Usuarios/' + uid);
					
					query.once('value').then(dataSnapshot => {
						userObj = dataSnapshot.val();
						return 'ok';
					})
					.catch(response => {
						res.json({ status: 'erro - ' + response.message });
						return 'erro';
					});
					return 'ok';
				})
				.catch(function(error) {
					res.json({ status: 'Erro', mensagem: error });
					return 'erro';
				});
				
				setTimeout(()=>{
					res.json({ user: userObj, id: uid });
					return 'ok';
				}, 500);
			}, 1000);

			return 'ok';
		})
		.catch(function(error) {
			res.json({ status: 'Erro', mensagem: error });
			return 'erro';
		});
		
		return 'ok';
	})
	.catch(function(error) {
		res.json({ status: 'Erro', mensagem: error });
		return 'erro';
  	});
});
  
  module.exports = router;