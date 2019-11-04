const {
	db,
} = require('../../src/db');

const houseDetail = (req, res) => {
	let query = db.ref('/Casas/' + req.body.idHouse);	
	
    query.once('value').then(dataSnapshot => {
        let data = dataSnapshot.val();
        if(data === null)
        {
            res.json(
                { 
                    status: 'erro',
                    erro: 'Casa não encontrada!'
                });
            return 'erro';
        }

        res.json(
            { 
                status: 'Ok',
                houseDetail: data
            });

        return 'Ok';
    })
    .catch(response => {
        res.json(
            { 
                status: 'erro - ' + response.message 
            });

        return 'erro';
    });
};

module.exports = houseDetail;