const express = require('express');
const router = express.Router();
const {
	db,
} = require('../public/javascripts/db');


router.get('/', function(req, res) {
	let id = req.headers['house-id'];
	let houseRef = db.ref('Houses/' + id);

	houseRef.once('value')
	.then(function(snapshot) {
		res.json(snapshot.val());
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