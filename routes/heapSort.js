var express = require('express');
var router = express.Router();
var sorter = require('../public/javascripts/heap');

/* GET result page. */
router.get('/:array', function (req, res, next) {
    var sortedArray = sorter.heapSort(JSON.parse(req.params.array));
    res.render('index', { array: sortedArray });
});

module.exports = router;
