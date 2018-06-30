// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for display all
  app.get("/api/recruiterAgencies", function(req, res) {
    db.recruiterAgency.findAll({}).then(function(results) {
      res.json(results)
    })
  });

  // Get route for retrieving a single piece of data
  app.get("/api/recruiterAgencies/city/:city1", function(req, res) {
    console.log(req.params)
    db.recruiterAgency.findAll({
      where: {
        city1: req.params.city1
      }
    }).then(function(results) {
      res.json(results)
    })
  });

  // POST route for posting a recruiters contact form for new information
  app.post("/api/recruiter_contacts", function(req, res) {
    console.log(req.params)
    db.main.create(req.params).then(function(dbPost){
      res.json(dbPost)
    })
  });

  /*// DELETE route for deleting a piece of data - PROJECT 3
  app.delete("/api/posts/:id", function(req, res) {
    
  });

  // PUT route for updating a piece of data - PROJECT 3
  app.put("/api/posts", function(req, res) {
   
  });*/

};
