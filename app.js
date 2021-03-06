var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var home = require('./routes/home');
var heapSort = require('./routes/heapSort');
var insertionSort = require('./routes/insertionSort');
var mergeSort = require('./routes/mergeSort');
var radixSort = require('./routes/radixSort');
var countingSort = require('./routes/countingSort');
var twoSum = require('./routes/twoSum');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname, 'public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/heapSort', heapSort);
app.use('/insertionSort', insertionSort);
app.use('/mergeSort', mergeSort);
app.use('/radixSort', radixSort);
app.use('/countingSort', countingSort);
app.use('/twoSum', twoSum);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
