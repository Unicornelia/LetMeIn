var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/geolocate', function(req, res) {
    res.render('geolocate', { title: 'Geolocate' });
});

module.exports = router;
