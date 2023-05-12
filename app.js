var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var testAPIRouter = require('./routes/ApiTest');
var headline2 = require('./routes/ApiTest');
var phHeadline = require('./routes/ApiTest');
var sportsNews = require('./routes/ApiTest');
var phSubHeadlineTech = require('./routes/ApiTest');
var phSubHeadBusiness = require('./routes/ApiTest');
var phSubHeadEntertainment = require('./routes/ApiTest');
var phSubHeadShowbiz = require('./routes/ApiTest');
var GlobalNews = require('./routes/ApiTest');
var GlobalNewsPolitics = require('./routes/ApiTest');
var GlobalNewsEntertain = require('./routes/ApiTest');
var BusinessNewsPh = require('./routes/ApiTest');
var BusinessNewsPh2 = require('./routes/ApiTest');
var BusinessNewsStocks = require('./routes/ApiTest');
var OpinionNews = require('./routes/ApiTest');
var OpinionNewsPh = require('./routes/ApiTest');
var OpinionNewsOthers = require('./routes/ApiTest');
var LifeStyleNews = require('./routes/ApiTest');
var LifeStyleNewsFashion = require('./routes/ApiTest');
var LifeStyleNewsTravel = require('./routes/ApiTest');
var SportsNewsWorld = require('./routes/ApiTest');
var SportsNewsPh = require('./routes/ApiTest');
var SportsRandom = require('./routes/ApiTest');
var EntertainmentNews = require('./routes/ApiTest');
var EntertainmentNewsTV = require('./routes/ApiTest');
var EntertainmentNewsComedy = require('./routes/ApiTest');
var TechNewsMobile = require('./routes/ApiTest');
var TechNewsPC = require('./routes/ApiTest');
var TechNewsGames = require('./routes/ApiTest');

var cors = require('cors'); 


var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news-api', testAPIRouter);
app.use('/headline2', headline2);
app.use('/phHeadline', phHeadline);
app.use('/sportsNews', sportsNews);
app.use('/phSubHeadlineTech', phSubHeadlineTech);
app.use('/phSubHeadBusiness', phSubHeadBusiness)
app.use('/phSubHeadEntertainment', phSubHeadEntertainment);
app.use('/phSubHeadShowbiz', phSubHeadShowbiz);
app.use('/GlobalNews', GlobalNews);
app.use('/GlobalNewsPolitics', GlobalNewsPolitics);
app.use('/GlobalNewsEntertain', GlobalNewsEntertain);
app.use('/BusinessNewsPh', BusinessNewsPh);
app.use('/BusinessNewsPh2', BusinessNewsPh2);
app.use('/BusinessNewsStocks', BusinessNewsStocks);
app.use('/OpinionNews', OpinionNews);
app.use('/OpinionNewsPh', OpinionNewsPh);
app.use('/OpinionNewsOthers', OpinionNewsOthers);
app.use('/LifeStyleNews', LifeStyleNews);
app.use('/LifeStyleNewsFashion', LifeStyleNewsFashion);
app.use('/LifeStyleNewsTravel', LifeStyleNewsTravel);
app.use('/SportsNewsWorld', SportsNewsWorld);
app.use('/SportsNewsPh', SportsNewsPh);
app.use('/SportsRandom', SportsRandom);
app.use('/EntertainmentNews', EntertainmentNews);
app.use('/EntertainmentNewsTV', EntertainmentNewsTV);
app.use('/EntertainmentNewsComedy', EntertainmentNewsComedy);
app.use('/TechNewsMobile', TechNewsMobile);
app.use('/TechNewsPC', TechNewsPC);
app.use('/TechNewsGames', TechNewsGames);

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
