const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');


router.get('/', function(req, res) {
	let cardRef = db.ref('Anuncios');

	cardRef.once('value')
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
  });
  
  module.exports = router;