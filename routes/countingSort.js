var express = require('express');
var router = express.Router();
var sorter = require('../public/javascripts/countingSort');

/* GET result page. */
module.exports = router.get('/:array', function (req, res, next) {
    var sortedArray = sorter.countingSort(JSON.parse(req.params.array));
    res.render('index', {property: sortedArray});
});

