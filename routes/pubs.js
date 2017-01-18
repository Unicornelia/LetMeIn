var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pubs', { title: 'Pubs' });
});

module.exports = router;
