var models = require('../models');

module.exports = {
  get: function (req, res) {

    Message.findAll({include: [User]})
      .complete(function(err, results) {
        res.json(results);
      });

  }, // a function which handles a get request for all messages
  post: function (req, res) {

    User.findOrCreate({username: req.body[username]})
      .complete(function(err, user) {
        var params = {
          text: req.body[text],
          userid: user.id,
          roomid: req.body[roomid]
        };
        Message.create(params)
          .complete(function(err, result) {
            res.sendStatus(201);
          });
      });

  } // a function which handles posting a message to the database
};
