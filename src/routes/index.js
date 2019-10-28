const express = require('express');
const router = express.Router();
const {
	db,
} = require('../public/javascripts/db');
const admin = require('firebase-admin');


/* GET home page. */
router.get('/', function(req, res) {
	let pendenteCadastroRef = db.ref('/PendenteCadastro/'),
		email = req.body.email,
		idCasa = null,
		casaParam = false;
	
	pendenteCadastroRef.once('value').then(dataSnapshot => {
		Object.entries(dataSnapshot.val()).forEach(([key, value]) => {
			if(value[0] === email){
				idCasa = key;
			}
		});
		if(idCasa !== null){
			casaParam = idCasa;
			db.ref('/Casas/' + casaParam + '/Pessoas/').push('W4lbZ8HeoRcuM7FK3Adz4mHTp163');
			let pendenteCadastroRemoveRef = db.ref('/PendenteCadastro/' + casaParam);
			pendenteCadastroRemoveRef.remove();
			console.log(casaParam);
		}
		return 'ok';
	})
	.catch(response => {console.log('erro');
		return 'erro';
	});
	
});

module.exports = router;
