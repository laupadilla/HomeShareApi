const {
	db,
} = require('../../src/db');

const houseList = (req, res) => {
	let id = req.headers['house-id'];
	let houseRef = db.ref('Houses/' + id);

	houseRef.once('value')
	.then(function(snapshot) {
		res.json(snapshot.val());

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

module.exports = houseList;