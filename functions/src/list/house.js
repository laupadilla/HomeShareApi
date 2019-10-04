const {
	db,
} = require('../../src/db');

const houseList = (req, res) => {
	let housesRef = db.ref('Casas');

	housesRef.once('value')
	.then(function(snapshot) {
        res.json(snapshot.val());
        
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

module.exports = houseList;