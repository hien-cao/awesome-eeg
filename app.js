var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const homeRouter = require('./routes/home');
const flappyRouter = require('./routes/flappy');
const scoreRouter = require('./routes/scoreUpdate');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', homeRouter);
app.use('/flappy', flappyRouter);
app.use('/results', scoreRouter);

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

// home route
app.get('/', (req, res) => {
	res.render('pages/index');
});

// game route
app.get('/flappy', (req, res) => {
	data = [ { name: 'Hien', scores: 5 }, { name: 'Vilis', scores: 10 }, { name: 'Niko', scores: 8 } ];
	res.render('pages/flappy', { data: data });
});

/* update result */
app.post('/results', (req, res) => {
	res.redirect('/flappy');
});

module.exports = app;
