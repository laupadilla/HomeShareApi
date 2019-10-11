const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');
const admin = require('firebase-admin');

router.post('/', function(req, res) {
	let emails = [],
		idList = [],
		data = {
		IdUser: req.body.iduser,
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

	req.body.pessoas.forEach(element => {
		admin.auth().getUserByEmail(element.email).then(response => {
			idList.push(response.uid);
		}).catch(error => {
			emails.push(element.email);
		});
	});

	setTimeout(() => {
		idList.push(req.body.iduser);
		data.Pessoas = idList;

		let newHouseKey = db.ref().child('Casas').push().key;
		let updates = {};

		updates['/Casas/' + newHouseKey] = data;
		updates['/PendenteCadastro/' + newHouseKey] = emails;

		db.ref().update(updates).then(response => {
			console.log('Synchronization succeeded');
			res.json({ status: 'Ok', idHouse: newHouseKey });

			return 'Ok';
		})
		.catch(response => {
			console.log('Synchronization failed');
			res.json({ status: 'erro - ' + response.message });

			return 'erro';
		});

	}, 1000);

  });
  
  module.exports = router;