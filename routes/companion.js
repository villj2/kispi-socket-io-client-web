var express = require('express');
var router = express.Router();

/* GET Companion App listing. */
router.get('/', function(req, res, next) {
    res.render('companion', { title: 'Companion' });
});

module.exports = router;