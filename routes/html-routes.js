// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/recruiter", function(req, res){
    res.sendFile(path.join(__dirname, "../public/recruiter.html"))
  })
  app.get("/recruitersearch", function(req, res){
    res.sendFile(path.join(__dirname, "../public/recruitersearch.html"))
  })


};
