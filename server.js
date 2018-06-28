// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash    = require('connect-flash');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());  // parse application/json
app.set('view engine', 'ejs'); // set up ejs for templating

// Required for passport
app.use(session({
	secret: 'ryanjimmychadmatt',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/recruiter-routes.js")(app);
require('./routes/passport-routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
});
