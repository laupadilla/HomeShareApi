const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const index = require('./src/routes/index');
const houseRegisterRouter = require('./src/routes/register/house');
const houseListRouter = require('./src/routes/list/house');
const houseDetailRouter = require('./src/routes/detail/house');
const userRegisterRouter = require('./src/routes/register/user');
const userDetailRouter = require('./src/routes/detail/user');
const userUpdateRouter = require('./src/routes/update/user');
const cardRegisterRouter = require('./src/routes/register/card');
const cardDetailRouter = require('./src/routes/detail/card');
const cardListRouter = require('./src/routes/list/card');
const taskRegisterRouter = require('./src/routes/register/task');

const usersByIdRouter = require('./src/routes/list/usersById');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/', index);
app.use('/houseRegister', houseRegisterRouter);
app.use('/houseList', houseListRouter);
app.use('/houseDetail', houseDetailRouter);
app.use('/userRegister', userRegisterRouter);
app.use('/userDetail', userDetailRouter);
app.use('/userUpdate', userUpdateRouter);
app.use('/cardRegister', cardRegisterRouter);
app.use('/cardDetail', cardDetailRouter);
app.use('/cardList', cardListRouter);
app.use('/taskRegister', taskRegisterRouter);

app.use('/usersById', usersByIdRouter);

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
