// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our models
var db = require("../models");
var email 	= require("emailjs");
var server 	= email.server.connect({
  user: 'hello@ryanadiaz.com',
  password: 'testpassword',
  host: 'mail.ryanadiaz.com',
  port: 587,
  tls:  false
});

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
  app.post("/api/recruiterContacts", function(req, res) {
    console.log(req.body)
    db.recruiterContact.create(req.body).then(function(dbPost){
      res.json(dbPost)
    })
  });

  app.post("/api/contactus-recruiter", function(req, res) {
    console.log("Sendmail has been fired!");
    console.log(req.body);
    
    server.send({
      text:     req.body.message, 
      from:     req.body.email, 
      to:       "Ryan Diaz <ryandiaz@gmail.com>",
      cc:       "Chad Pilker <chad.pilker@gmail.com>", 
      subject:  "RecruitHound Contact - Recruiter",
      attachment:
      [
        {data: '<html>Agency: ' + req.body.recruiting_agency + '<br /> Name: ' + req.body.person_name + '<br />Phone:  ' + req.body.number1 + '<br />Message: ' + req.body.message + '</html>', alternative:true}
      ]
    }, function(err, message) {
        console.log(err || message); 
        if (!err) {   // Sends back status message in the form of an object -> res.status
          res.json({status: "success"});
        } else {
          res.json({status: "error"});
        }
    });
  });

  /*// DELETE route for deleting a piece of data - PROJECT 3
  app.delete("/api/posts/:id", function(req, res) {
    
  });

  // PUT route for updating a piece of data - PROJECT 3
  app.put("/api/posts", function(req, res) {
   
  });*/

};
