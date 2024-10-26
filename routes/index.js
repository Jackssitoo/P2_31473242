var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hola mundo,Gabriel Manuel Pita Reyes C.I:31473242 seccion: 4');
});

module.exports = router;
