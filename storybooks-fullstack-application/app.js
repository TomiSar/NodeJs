const path = require('path')
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db')

// Load config file from .env
dotenv.config({ path: './config/config.env'})
 
// Connect to MongoDB
connectDB();

const app = express();

// Logging in development mode use morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Routes Login, Dashboard
app.use('/', require('./routes/index'))

// Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Setup static folder for css
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Running server in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));