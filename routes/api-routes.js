// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
 
  app.post("/api/LinkedOut/login", passport.authenticate("local"), function(req, res) {
    res.json(req.employers);
  });

  // Route for signing up a user.
  app.post("/api/LinkedOut/signup", function(req, res) {
    db.employers.create({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      pwd: req.body.pwd
    })
      .then(function() {
        res.redirect(307, "/api/LinkedOut/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.post("/api/LinkedOut/add-jobAd/add", function(req, res) {
    console.log(req.body);
    db.jobs.create({
      title: req.body.title,
      skills: req.body.skills,
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Route for logging user out
  app.get("/LinkedOut/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting the data about our user to be used client side
  app.get("/api/LinkedOut/user_data", function(req, res) {
    db.employers.findOne({
      where: {
        id: 1,
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

  

  // Route for getting a list of all the jobAds for the user to be used client side
  app.get("/api/LinkedOut/jobAds/:id", function(req, res) {
    db.jobAds.findAll({
       where: {
         //employerId: req.params.id,
         //status: true
       }
    }).then(function(result) {
      return res.json(result);
    });
  });

  app.get("/api/LinkedOut/jobAds/info/:jobId", function(req, res) {
    db.jobs.findOne({
      where: {
        id: req.params.jobId,
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

  // Route for getting a list of all the employees that are compatible with the JobAd
  app.get("/api/LinkedOut/employeelist", function(req, res) {
    db.employees.findAll({
      where: {
        job_id: req.jobAds.jobId
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

   // Route for getting the data the jobs requested to be used client side
   app.get("/api/LinkedOut/contractors/name/:jobName", function(req, res) {
    db.jobs.findOne({
      where: {
        title: req.params.jobName
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

  app.get("/api/LinkedOut/contractors/:id", function(req, res) {
    db.employees.findAll({
      where: {
        jobId: req.params.id,
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

  app.get("/api/LinkedOut/add-jobAd/getNewJob/:createdAt", function(req, res) {
    db.jobs.findOne({
      where: {
        createdAt: req.params.createdAt,
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

  app.post("/api/LinkedOut/add-jobAd/createAd/:id", function(req, res) {
    db.jobAds.create({
      employerId: 1,
      jobId: req.params.id,
      status: true,
    }).then(function(result) {
      return res.json(result);
    });
  });
};