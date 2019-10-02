const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const loginRouter = require('./src/routes/login');
const houseRegisterRouter = require('./src/routes/houseRegister');
const houseUpdateRouter = require('./src/routes/houseUpdate');
const houseListRouter = require('./src/routes/houseList');
const billsRouter = require('./src/routes/bills');
const userRegisterRouter = require('./src/routes/register/user');
const userDetailRouter = require('./src/routes/detail/user');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/houseRegister', houseRegisterRouter);
app.use('/houseUpdate', houseUpdateRouter);
app.use('/houseList', houseListRouter);
app.use('/bills', billsRouter);
app.use('/userRegister', userRegisterRouter);
app.use('/userDetail', userDetailRouter);

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
