const express = require('express');
const router = express.Router();
const {
	db,
} = require('../public/javascripts/db');
const admin = require('firebase-admin');


/* GET home page. */
router.get('/', function(req, res) {
	let updates = {};
	
	let testeRef = db.ref('/Usuarios/' + req.body.param);

	let pendenteCadastroRef = db.ref('/PendenteCadastro/'),
		email = req.body.email,
		idCasa,
		casaParam = false;

	pendenteCadastroRef.once('value').then(dataSnapshot => {
		Object.entries(dataSnapshot.val()).forEach(([key, value]) => {
			if(value[0] === email){
				idCasa = key;
			}
		});
		if(idCasa !== null){
			casaParam = idCasa;
			db.ref('/Casas/' + casaParam + '/Pessoas/').push(uid);
			db.ref('PendenteCadastro').child(casaParam).remove();
		}
        return 'ok';
    })
    .catch(response => {console.log('erro');
        return 'erro';
	});
	
	

	// testeRef.once('value').then(dataSnapshot => {
    //     console.log(dataSnapshot.val());
	// 	res.json({ retorno: dataSnapshot.val() });

    //     return 'Ok';
    // })
    // .catch(response => {
    //     console.log('erro');
	// 	res.json({ retorno: 'erro' });

    //     return 'erro';
    // });
	
	// updates['/Usuarios/' + uid] = data;
	// db.ref().update(updates).then(response => {
		
	// })
	// .catch(response => {
	// 	res.json({ status: 'erro - ' + response.message });
	// });
});

module.exports = router;
