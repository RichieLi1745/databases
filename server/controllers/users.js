var models = require('../models');

module.exports = {
  get: function (req, res) {
    User.findall()
      .complete(function(err, results) {
        res.json(results);
      });
  },
  post: function (req, res) {
    User.create({username: req.body[username]})
      .complete(function(err, user) {
        res.sendStatus(201);
      });
  }
};
