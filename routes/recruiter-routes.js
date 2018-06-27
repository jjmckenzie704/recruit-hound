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
  app.get("/api/recruiterAgencies/city1/:city", function(req, res) {
    db.recruiterAgency.findAll({
      where: {
        city1: req.params.city
      }
    }).then(function(results) {
      res.json(results)
    })
  });

  // POST route for saving a new piece of data
  app.post("/api/posts", function(req, res) {
    
  });

  // DELETE route for deleting a piece of data
  app.delete("/api/posts/:id", function(req, res) {
    
  });

  // PUT route for updating a piece of data
  app.put("/api/posts", function(req, res) {
   
  });

};
