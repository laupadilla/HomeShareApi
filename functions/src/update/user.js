const {
	db,
} = require('../../src/db');

const userUpdate = (req, res) => {
	let data = {
		NomeCompleto: req.body.nomecompleto,
		NomeUsuario: req.body.nomeusuario,
		Email: req.body.email,
        Senha: req.body.senha,
        ConfirmacaoSenha: req.body.confirmacaosenha,
		DataNascimento: req.body.datanascimento,
		Estado: req.body.estado,
		Cidade: req.body.cidade
    };
	
	let updates = {};
	updates['/Usuarios/' + req.body.idUser] = data;	

	db.ref().update(updates).then(response => {
		res.json(
			{ 
				status: 'Atualizado',
				idUser: req.body.idUser
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
};

module.exports = userUpdate;