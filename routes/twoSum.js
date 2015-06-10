var express = require('express');
var router = express.Router();
var finder = require('../public/javascripts/twoSum');

/* GET result page. */
module.exports = router.get('/:array/:int', function (req, res, next) {
    var result = finder.twoSum2(JSON.parse(req.params.array),req.params.int);
    res.send(result);
});

