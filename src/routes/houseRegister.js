const express = require('express');
const router = express.Router();
const {
	db,
} = require('../public/javascripts/db');


router.post('/', function(req, res) {
	let houseId = req.body.houseId;
	let houseName = req.body.houseName;
	let houseDescription = req.body.houseDescription;
	let houseRoomIndividual = req.body.houseRoomIndividual;
	let housePeople = req.body.housePeople;
	let houseAddress = req.body.houseAddress;
	let housePrice = req.body.housePrice;
	let housePets = req.body.housePets;		
	let retorno = 'erro';
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
		.then(function() {
			console.log('Synchronization succeeded');
			retorno = 'Ok';
			
			res.json(retorno);
		})
		.catch(function(error) {
			console.log('Synchronization failed');
			res.json(retorno);
		});


	//Versão na cloud function abaixo
	// let userName = req.headers['user-name'];
	// let userPass = req.headers['user-pass'];
	// let retorno = 'erro';
	// var query = db.ref('/Users').orderByKey();	
	
	// query.on('value', function(dataSnapshot){
	// 	dataSnapshot.forEach(function(snapshot){
	// 		var data = snapshot.val();
	// 		if(data.Usuario === userName && data.Senha === userPass)
	// 			retorno = data.Perfil;
	// 	})
	// 	res.json(retorno);
	// },function (errorObject) {
	// 	res.send("The read failed: " + errorObject.code);
	// });

  });
  
  module.exports = router;