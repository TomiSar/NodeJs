const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const connectDB = require('./config/db');

// Load config file from .env
dotenv.config({ path: './config/config.env' });

// Passport config
require('./config/passport')(passport);

// Connect to MongoDB
connectDB();

const app = express();

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Method override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// Logging in development mode use morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Handlebars helpers
const {
  formatDate,
  truncate,
  stripTags,
  editIcon,
  select,
} = require('./helpers/hbs');

// Handlebars (remember to add helpers also in here)
app.engine(
  '.hbs',
  exphbs({
    helpers: {
      formatDate,
      truncate,
      stripTags,
      editIcon,
      select,
    },
    defaultLayout: 'main',
    extname: '.hbs',
  })
);

app.set('view engine', '.hbs');

// MongoStore --> session configuration for MongoStore Store at the MondoDB database sessions
const mongoStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: 'sessions',
});

// Sessions
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //cookie Valid for 24 hours
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set global variable for express to access user and use it on templates.
// Use midlleware function. If requested user doesn't exist set to null.
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// Setup static folder for css
app.use(express.static(path.join(__dirname, 'public')));

// Add here all the Routes used in the App
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/stories', require('./routes/stories'));

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Running server in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
