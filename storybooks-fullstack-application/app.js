const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const connectDB = require("./config/db");

// Load config file from .env
dotenv.config({ path: "./config/config.env" });

// Passport config
require("./config/passport")(passport);

// Connect to MongoDB
connectDB();

const app = express();

// Logging in development mode use morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Handlebars
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

// Add in a store for MongoDB --> session configuration for MongoStore
// Store at the MondoDB database sessions
const mongoStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: "sessions",
});

// Sessions
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Setup static folder for css
app.use(express.static(path.join(__dirname, "public")));

// Routes used in the App
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Running server in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);