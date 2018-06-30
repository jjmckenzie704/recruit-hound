// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for display all
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(results) {
      res.json(results)
    })
  });

  // Get route for retrieving a single piece of data
  app.get("/api/posts/:id", function(req, res) {
   
  });

  // POST route for saving information when a new user requests information
  app.post("/api/userContacts", function(req, res) {
    console.log(req.params)
    db.main.create(req.params).then(function(dbPost){
      res.json(dbPost)
    })
  });

  // DELETE route for deleting a piece of data
  app.delete("/api/posts/:id", function(req, res) {
    
  });

  // PUT route for updating a piece of data
  app.put("/api/posts", function(req, res) {
   
  });

};
