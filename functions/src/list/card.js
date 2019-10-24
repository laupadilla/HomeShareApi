const {
	db,
} = require('../../src/db');

const cardList = (req, res) => {
	let cardRef = db.ref('Anuncios');

	cardRef.once('value')
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

module.exports = cardList;