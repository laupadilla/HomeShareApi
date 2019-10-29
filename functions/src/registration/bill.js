const {
	db,
} = require('../db');

const billRegister = (req, res) => {
	let contasRef = db.ref('Casas/' + req.body.idHouse + '/Contas'),
        categoria = req.body.categoria,
        data = {
            Membros: req.body.membros,
            DiaVencimento: req.body.dia,
            Titulo: req.body.titulo,
            ValoDividido: getPrice(parseFloat(req.body.valor), req.body.membros.length),
            ValorTotal: req.body.valor
        };

    switch (categoria) {
        case 'Mensal':
            data.Categoria = 'Mensal';
            break;
    
        case 'Única':
            data.Categoria = 'Única';
            break;
    }

    contasRef.push(data).then(response => {
        req.body.membros.forEach(element => {
            setTimeout(() => {
                db.ref('Usuarios/' + element + '/Contas').push(data).then(response => {                
                    return 'Ok';
                })
                .catch(response => {
                    res.json({ status: 'erro - ' + response.message });
                    return 'erro';
                });    
            }, 200);
        });
        res.json({ bill: data });
        return 'Ok';
    })
    .catch(response => {
        res.json({ status: 'erro - ' + response.message });
        return 'erro';
    });

    function getPrice(valor, numeroPessoas){
        return valor/numeroPessoas;
    }
};

module.exports = billRegister;