const {
	db,
} = require('../../src/db');

const houseRegister = (req, res) => {
	let data = {
		Name: req.body.houseName,
		Description: req.body.houseDescription,
		RoomIndividual: req.body.houseRoomIndividual,
		People: req.body.housePeople,
		Address: req.body.houseAddress,
		Price: req.body.housePrice,
		Pets: req.body.housePets,
		BillList: {
			Fixed: {
				Rent: 0,
				Light: 0,
				Water: 0
			},
			Variable: {
				"Mercado": 50.00
			}
		},
		Tasks: {
			"Tarefa de Exemplo": "Exemplo"
		}
	  };
	
	let newHouseKey = db.ref().child('Houses').push().key;
	let updates = {};

	updates['/Houses/' + newHouseKey] = data;

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
};

module.exports = houseRegister;