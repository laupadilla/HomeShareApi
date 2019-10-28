const {
	db,
} = require('../../src/db');
const admin = require('firebase-admin');

const userRegister = (req, res) => {
	
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
				pendenteCadastroRef.child(casaParam).remove();
			}
			return 'ok';
		})
		.catch(response => {console.log('erro');
			return 'erro';
		});
		
		let data = {
			NomeCompleto: req.body.nomecompleto,
			NomeUsuario: req.body.nomeusuario,
			Email: req.body.email,
			Senha: req.body.senha,
			ConfirmacaoSenha: req.body.confirmacaosenha,
			DataNascimento: req.body.datanascimento,
			Estado: req.body.estado,
			Cidade: req.body.cidade,
			IdCasa: casaParam,
			Chats: false
		};

		let updates = {};
		updates['/Usuarios/' + uid] = data;
		
		db.ref().update(updates).then(response => {
			res.json({ status: 'ok', idUser: uid });
			return 'ok';
		})
		.catch(response => {
			res.json({ status: 'erro - ' + response.message });
			return 'erro';
		});
		res.json({ status: 'Autenticado', idToken: uid });
		return 'ok';
	}).catch(function(error) {
		res.json({ status: 'Erro', mensagem: error });
		return 'erro';
  });
};

module.exports = userRegister;