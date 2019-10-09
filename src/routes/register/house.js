const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');

router.post('/', function(req, res) {
	let data = {
		Pessoas: req.body.pessoas,
		Apelido: req.body.apelido,
		Descricao: req.body.descricao,
		Cidade: req.body.cidade,
		Capacidade: req.body.capacidade,
		Genero: req.body.genero,
		Quarto: req.body.quarto,
		Pets: req.body.pets,
		VagasGaragem: req.body.vagasgaragem,
		Contas: false, 
		Tarefas: false,
		Anuncio: false
	  };
	
	let newHouseKey = db.ref().child('Casas').push().key;
	let updates = {};

	updates['/Casas/' + newHouseKey] = data;	

	db.ref().update(updates).then(response => {
		console.log('Synchronization succeeded');
		res.json(
			{ 
				status: 'Ok',
				idHouse: newHouseKey
			});

		return 'Ok';
	})
	.catch(response => {
		console.log('Synchronization failed');
		res.json(
			{ 
				status: 'erro - ' + response.message 
			});

		return 'erro';
	});
  });
  
  module.exports = router;