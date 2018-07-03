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
var exphbs = require('express-handlebars');
var fileUpload = require('express-fileupload');








// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//For Handlebars
app.set('views', './views')
app.engine('handlebars', exphbs({ extname: '.handlebars' }));
app.set('view engine', 'handlebars');


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());  // parse application/json
app.use(fileUpload());
//app.set('view engine', 'ejs'); // set up ejs for templating  /  Switched out for handlebars

// Required for passport
app.use(session({
	secret: 'keyboard cat',
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
require("./routes/user-routes.js")(app, passport);
require("./routes/html-routes.js")(app);
require("./routes/recruiter-routes.js")(app);
var authRoute = require('./routes/passport-routes.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

//for sendmail

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  console.log('Database connected')
  app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
});
