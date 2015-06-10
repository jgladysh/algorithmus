var express = require('express');
var router = express.Router();
var sorter = require('../public/javascripts/insertionSort');

/* GET result page. */
module.exports = router.get('/:array', function (req, res, next) {
    var sortedArray = sorter.insertionSort(JSON.parse(req.params.array));
    res.send(sortedArray);
});

