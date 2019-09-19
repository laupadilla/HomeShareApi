const {
	db,
} = require('../../src/db');

const houseRegister = (req, res) => {
	let houseId = req.body.houseId;
	let houseName = req.body.houseName;
	let houseDescription = req.body.houseDescription;
	let houseRoomIndividual = req.body.houseRoomIndividual;
	let housePeople = req.body.housePeople;
	let houseAddress = req.body.houseAddress;
	let housePrice = req.body.housePrice;
	let housePets = req.body.housePets;	
	let query = db.ref('Houses').push();

	if(houseId !== undefined && houseId !== '')
		query = db.ref('Houses/' + houseId);

	query.set({
			Name: houseName,
			Description: houseDescription,
			RoomIndividual: houseRoomIndividual,
			People: housePeople,
			Address: houseAddress,
			Price: housePrice,
			Pets: housePets
		})
		.then(response => {
			console.log('Synchronization succeeded');
			res.json({status: 'Ok'});
			return 'Ok';
		})
		.catch(response => {
			console.log('Synchronization failed');
			res.json({status: 'erro'});
			return 'erro';
		});
};

module.exports = houseRegister;