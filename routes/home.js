var express = require('express');
var router = express.Router();
var sorter = require('../public/javascripts/countingSort');

/* GET result page. */
module.exports = router.get('/',function (req, res, next) {
    res.render('index', {property: ''});
});
