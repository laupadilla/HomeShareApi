const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');


router.get('/', function(req, res) {
	let housesRef = db.ref('Casas');

	housesRef.once('value')
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