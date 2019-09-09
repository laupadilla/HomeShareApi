var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  let usuariosTeste = [];

  usuariosTeste.push({
    'Nome' : 'Laura',
    'Idade' : 23
  },
  {
    'Nome' : 'Daniel',
    'Idade' : 23
  })

  res.send(usuariosTeste);
});

module.exports = router;
