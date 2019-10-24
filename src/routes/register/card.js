const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');

router.put('/', function(req, res) {
	let data = {
        ValorMedio: req.body.valormedio,
        Descricao: req.body.descricao
	};
    let cardRef = db.ref('Anuncios/' + req.body.idHouse);

    cardRef.update(data).then(response => {
        console.log('Synchronization succeeded');
        res.json({ status: 'Ok' });

        return 'Ok';
    })
    .catch(response => {
        console.log('Synchronization failed');
        res.json({ status: 'erro - ' + response.message });

        return 'erro';
    });
});
  
  module.exports = router;