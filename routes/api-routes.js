var db = require("../models");

// Routes
module.exports = function(app) {
    // GET route for getting all of the user info for making the homepage
    app.get("/api/:id", function(req, res) {
        db.Todo.findAll({
            where: {
                id: req.params.id
              }
        }).then(function(dbUser) {
        res.json(dbUser);
        });
    });

};