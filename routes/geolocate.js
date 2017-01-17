var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/geolocate', function(req, res) {
    res.render('geolocate', { title: 'Geolocate' });
});

module.exports = router;
