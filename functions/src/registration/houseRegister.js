const {
	db,
} = require('../../src/db');

const houseRegister = (req, res) => {
	let data = {
		Pessoas: req.body.pessoas,
		Endereco: req.body.endereco,
		Quartos: req.body.qtdquartos,
		VagasGaragem: req.body.vagasgaragem,
		Contas: req.body.contas,
		Tarefas: req.body.tarefas,
		Anuncio: req.body.anuncio
	  };
	
	let newHouseKey = db.ref().child('Casas').push().key;
	let updates = {};

	updates['/Casas/' + newHouseKey] = data;	

	db.ref().update(updates).then(response => {
		res.json(
			{ 
				status: 'Ok',
				idHouse: newHouseKey
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

module.exports = houseRegister;