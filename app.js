var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet');
var mysql = require('mysql');

const homeRouter = require('./routes/home');
const flappyRouter = require('./routes/flappy');
const scoreRouter = require('./routes/scoreUpdate');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(compression()); // compress all routes
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.resolve('dist')));

app.use('/', homeRouter);
app.use('/flappy', flappyRouter);
app.use('/results', scoreRouter);

// connect database
/* var connection = mysql.createConnection({
	host: 'eu-cdbr-west-02.cleardb.net',
	user: 'bf157af0edf581',
	password: '8a4712dd',
	database: 'heroku_e07636468caf80f'
}); */
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Dh771989',
	database: 'awesomeapp'
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
