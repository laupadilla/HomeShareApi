const express = require('express');
const router = express.Router();
const {
	db,
} = require('../public/javascripts/db');


router.get('/', function(req, res, next) {
	let userName = req.headers['user-name'];
	let userPass = req.headers['user-pass'];
	let retorno = 'erro';
	const query = db.ref('/Users').orderByKey();	
	
	query.once('value').then(function(dataSnapshot) {
		dataSnapshot.forEach(function(snapshot){
			const data = snapshot.val();
			if(data.Usuario === userName && data.Senha === userPass)
				retorno = data.Perfil;
		})		
		res.json(retorno);
		db.ref('/Users').off('value');
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