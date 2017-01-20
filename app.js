import express from 'express';
import compression from 'compression';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import schema from './graphql';
import graphqlHTTP from 'express-graphql';
import modelsMongoose from './models';


// process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'development';

//connection to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/db_evenz');
var db = mongoose.connection;
db.once('open', () => {
  console.log("Connexion à la base de données réussie !");
}).on('error', () => {
  console.error('connection error:')
}).on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function () {
  db.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


var app = express();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(compression());
app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/login', require('./routes/login/login'));
// app.use('/logout', require('./routes/logout/logout'));
// app.use('/admin', require('./routes/admin/admin'));
// app.use('/user', require('./routes/user/user'));
// app.use('/extract_data', require('./routes/extract_data/extract_data'));

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: process.env.NODE_ENV === 'development',
})));

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