const {
	db,
} = require('../../src/db');

const houseUpdate = (req, res) => {
	let data = {
		Id : req.body.idHouse,
		Name: req.body.Name,
		Description: req.body.Description,
		RoomIndividual: req.body.RoomIndividual,
		People: req.body.People,
		Address: req.body.Address,
		Price: req.body.Price,
		Pets: req.body.Pets,
		BillList: req.body.BillList,
		Tasks: req.body.Tasks
	  };
	
	let updates = {};

	updates['/Houses/' + req.body.idHouse] = data;	

	db.ref().update(updates).then(response => {
		console.log('Synchronization succeeded');
		res.json(
			{ 
				status: 'Atualizado',
				idHouse: req.body.idHouse
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
};

module.exports = houseUpdate;