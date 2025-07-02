var express = require('express');
var router = express.Router();

/* GET Paraverse listing. */
router.get('/', function(req, res, next) {
    res.render('paraverse', { title: 'Paraverse' });
});

module.exports = router;