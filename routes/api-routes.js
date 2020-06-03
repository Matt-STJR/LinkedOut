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

  // Route for logging user out
  app.get("/LinkedOut/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting the data about our user to be used client side
  app.get("/api/LinkedOut/user_data", function(req, res) {
    if (!req.employers) {
      res.json({});
    } else {
      res.json({
        name: req.employers.name,
        about: req.employers.about,
        address: req.employers.address,
        phone: req.employers.phone,
        email: req.employers.email,
        id: req.employers.id
      });
    }
  });
  // Route for getting a list of all the jobAds for the user to be used client side
  app.get("/api/LinkedOut/jobAds/:id", function(req, res) {
    jobAds.findAll({
      where: {
        emp_id: req.params.id,
        status: true
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

  app.get("api/LinkedOut/jobAds/info", function(req, res) {
    jobs.findOne({
      where: {
        id: req.JobAds.job_id,
      }
    }).then(function(result) {
      return res.json(result);
    });
  });

  // Route for getting a list of all the employees that are compatible with the JobAd
  app.get("/api/LinkedOut/employeelist", function(req, res) {
    employees.findAll({
      where: {
        job_id: req.jobAds.job_id
      }
    }).then(function(result) {
      return res.json(result);
    });
  });
};
