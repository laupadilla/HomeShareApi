const {
	db,
} = require('../../src/db');

const userDetail = (req, res) => {
	let query = db.ref('/Usuarios/' + req.body.idUser);	
	
    query.once('value').then(dataSnapshot => {
        let data = dataSnapshot.val();
        if(data === null){
            res.json({ 
                    status: 'erro',
                    erro: 'Usuário não encontrado!'
                });
            return 'erro';
        }

        res.json({ 
                status: 'Ok',
                userDetail: data
            });

        return 'Ok';
    })
    .catch(response => {
        res.json({ 
                status: 'erro - ' + response.message 
            });

        return 'erro';
    });
};

module.exports = userDetail;