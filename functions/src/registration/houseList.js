const {
	db,
} = require('../../src/db');

const houseListById = (req, res) => {
	let id = req.headers['house-id'];

	if(id === null || id === undefined)
		return res.json({erro: 'Id Inválido!'});

	let houseRef = db.ref('Houses/' + id);

	houseRef.once('value')
	.then(function(snapshot) {
		res.json(snapshot.val());

		return 'ok';
	})
	.catch(response => {
		res.json({ status: 'erro - ' + response.message });

		return 'erro';
	});
};

module.exports = houseListById;