const {
	db,
} = require('../../src/db');

const cardDetail = (req, res) => {
	let queryCard = db.ref('/Anuncios/' + req.body.idHouse);
    let queryHouse = db.ref('/Casas/' + req.body.idHouse);
    let cardData;
    let houseData;

    queryCard.once('value').then(dataSnapshot => {
        cardData = dataSnapshot.val();
        return 'Ok';
    })
    .catch(response => {
        res.json({ status: 'erro - ' + response.message });
        return 'erro';
    });

    queryHouse.once('value').then(dataSnapshot => {
        houseData = dataSnapshot.val();
        return 'Ok';
    })
    .catch(response => {
        res.json({ status: 'erro - ' + response.message });
        return 'erro';
    });

    setTimeout(() => {
		res.json({ 
            status: 'Ok',
            dataCard: cardData,
            dataHouse: houseData
        });
	}, 1000);
};

module.exports = cardDetail;