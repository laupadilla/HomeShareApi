const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');


router.post('/', function(req, res) {
    
    if(req.body.senha !== req.body.confirmacaosenha){
        res.json({ status: 'Confirmação de senha não corresponde!'});
        return 'erro';
    }
    
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
	
	let newUserKey = db.ref().child('Usuarios').push().key;
	let updates = {};

	updates['/Usuarios/' + newUserKey] = data;	

	db.ref().update(updates).then(response => {
		res.json(
			{ 
				status: 'Ok',
				idUser: newUserKey
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
  });
  
  module.exports = router;