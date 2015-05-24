/**
 * Created by julia on 5/24/15.
 */

var express = require('express');
var router = express.Router();
var sorter = require('../public/javascripts/radixSort');

/* GET result page. */
module.exports = router.get('/:array', function (req, res, next) {
    var sortedArray = sorter.radixSort(JSON.parse(req.params.array));
    res.render('index', {property: sortedArray});
});


