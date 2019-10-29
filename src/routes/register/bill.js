const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');

router.post('/', function(req, res) {
    let contasRef = db.ref('Casas/' + req.body.idHouse + '/Contas'),
        categoria = req.body.categoria,
        data = {
            Membros: req.body.membros,
            DiaVencimento: req.body.dia,
            Titulo: req.body.titulo
        };

    switch (categoria) {
        case 'Mensal':
            data.Categoria = 'Mensal';
            data.Valor = req.body.valor;
            break;
    
        case 'Única':
            data.Categoria = 'Única';
            data.ValorDividido = getPrice(parseFloat(req.body.valor), req.body.membros.length);
            data.ValorTotal = req.body.valor;
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
});
  
module.exports = router;