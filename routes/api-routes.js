// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
 
  app.post("/api/LinkedOut/login", passport.authenticate("local"), function(req, res) {
    res.json(req.employer);
  });

  // Route for signing up a user.
  app.post("/api/LinkedOut/signup", function(req, res) {
    db.employer.create({
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

  // Route for getting some data about our user to be used client side
  app.get("/api/LinkedOut/user_data", function(req, res) {
    if (!req.employer) {
      res.json({});
    } else {
      res.json({
        email: req.employer.email,
        id: req.employer.id
      });
    }
  });
};
