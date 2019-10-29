const express = require('express');
const router = express.Router();
const {
	db,
} = require('../../public/javascripts/db');

router.post('/', function(req, res) {
	let data = {
        Tarefa: req.body.titulo,
        Dia: req.body.dia,
        IdUser: req.body.uid
    };
    
    let taskRef = db.ref('Casas/' + req.body.idHouse + '/Tarefas');
    let userRef = db.ref('Usuarios/' + req.body.uid + '/Tarefas');

    taskRef.push(data).then(response => {
        userRef.push(data).then(response => {
            res.json({ task: data });
            return 'Ok';
        })
        .catch(response => {
            res.json({ status: 'erro - ' + response.message });
            return 'erro';
        });
        return 'Ok';
    })
    .catch(response => {
        res.json({ status: 'erro - ' + response.message });
        return 'erro';
    });
});
  
  module.exports = router;