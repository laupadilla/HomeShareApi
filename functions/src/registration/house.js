const {
	db,
} = require('../db');
const admin = require('firebase-admin');

const houseRegister = (req, res) => {
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
			return 'Ok';
		}).catch(error => {
			emails.push(element.email);
			return 'erro';
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
			res.json({ status: 'Ok', idHouse: newHouseKey });
			return 'Ok';
		})
		.catch(response => {
			res.json({ status: 'erro - ' + response.message });
			return 'erro';
		});
	}, 2000);
};

module.exports = houseRegister;