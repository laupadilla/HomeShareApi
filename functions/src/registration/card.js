const {
	db,
} = require('../db');
const admin = require('firebase-admin');

const cardRegister = (req, res) => {
	let data = {
        ValorMedio: req.body.valormedio,
        Descricao: req.body.descricao,
        Imagem: req.body.imagem
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
};

module.exports = cardRegister;