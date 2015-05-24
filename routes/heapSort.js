var express = require('express');
var router = express.Router();
var sorter = require('../public/javascripts/heap');

/* GET result page. */
module.exports = router.get('/:array', function (req, res, next) {
    var sortedArray = sorter.heapSort(JSON.parse(req.params.array));
    res.render('index', { property: sortedArray });
});
