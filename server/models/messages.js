var db = require('../db');

module.exports = {
  getAll: function () {
    var queryStr = 'SELECT messages.id, messages.text, rooms.roomname, users.username FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) \
    LEFT OUTER JOIN rooms ON messages.roomid = rooms.id order by messages.id desc';
    db.query(queryStr, function(err, results) {

      callback(err, results);

    });
  }, // a function which produces all the messages
  create: function () {
    var queryStr = 'INSERT INTO messages(text, userid, roomname) \
                    VALUES (?, (SELECT if FROM users WHERE username = ? limit 1), ?)';
    db.query(queryStr, params, function(err, result) {

      callback(err, results);
    });
  } // a function which can be used to insert a message into the database
};
