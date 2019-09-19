const express = require('express');
const router = express.Router();
const {
	db,
} = require('../public/javascripts/db');


router.get('/', function(req, res) {
	let bill = [{
		Name: 'Luz',
		Price: 600,
		HouseId: '-LozC5_WTdKsMsHjAAnj',
		BillCategory: 'Fixa'
	},
	{
		Name: 'Água',
		Price: 300,
		HouseId: '-LozC5_WTdKsMsHjAAnj',
		BillCategory: 'Fixa'
	}];


	res.json(bill);



	
	// let houseId = req.query.Id;
	// let houseName = req.headers['house-name'];
	// let houseDescription = req.headers['house-descrip'];
	// let houseRoomIndividual = req.headers['house-room'];
	// let housePeople = req.headers['house-people'];
	// let houseAddress = req.headers['house-address'];
	// let housePrice = req.headers['house-price'];
	// let housePets = req.headers['house-pets'];
	// let retorno = 'erro';
	// let query = db.ref('Houses').push();

	// if(houseId !== undefined && houseId !== '')
	// 	query = db.ref('Houses/' + houseId);

	// query.set({
	// 		Name: houseName,
	// 		Description: houseDescription,
	// 		RoomIndividual: houseRoomIndividual,
	// 		People: housePeople,
	// 		Address: houseAddress,
	// 		Price: housePrice,
	// 		Pets: housePets
	// 	})
	// 	.then(function() {
	// 		console.log('Synchronization succeeded');
	// 		retorno = 'Ok';
			
	// 		res.json(retorno);
	// 	})
	// 	.catch(function(error) {
	// 		console.log('Synchronization failed');
	// 		res.json(retorno);
	// 	});


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

router.post('/', function(req, res) {
let bill = [{
	Name: 'Luz',
	Price: 600,
	HouseId: '-LozC5_WTdKsMsHjAAnj',
	BillCategory: 'Fixa'
},
{
	Name: 'Água',
	Price: 300,
	HouseId: '-LozC5_WTdKsMsHjAAnj',
	BillCategory: 'Fixa'
}];



let userId = req.headers['user-id'];


if(userId === null || userId === undefined){
	res.json({
		status: 'erro'
	})
	return {status : 'erro'}; 
}
	

res.json(bill);




// let houseId = req.query.Id;
// let houseName = req.headers['house-name'];
// let houseDescription = req.headers['house-descrip'];
// let houseRoomIndividual = req.headers['house-room'];
// let housePeople = req.headers['house-people'];
// let houseAddress = req.headers['house-address'];
// let housePrice = req.headers['house-price'];
// let housePets = req.headers['house-pets'];
// let retorno = 'erro';
// let query = db.ref('Houses').push();

// if(houseId !== undefined && houseId !== '')
// 	query = db.ref('Houses/' + houseId);

// query.set({
// 		Name: houseName,
// 		Description: houseDescription,
// 		RoomIndividual: houseRoomIndividual,
// 		People: housePeople,
// 		Address: houseAddress,
// 		Price: housePrice,
// 		Pets: housePets
// 	})
// 	.then(function() {
// 		console.log('Synchronization succeeded');
// 		retorno = 'Ok';
		
// 		res.json(retorno);
// 	})
// 	.catch(function(error) {
// 		console.log('Synchronization failed');
// 		res.json(retorno);
// 	});


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