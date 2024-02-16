var Sequelize = require('Squelize');
var orm = new Sequelize('chat', 'root', '');

var Message = orm.define('Message', {
  messageid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  userid: Sequelize.INTEGER,
  roomid: Sequelize.INTEGER,

});
var User = orm.define('User', {
  id: Sequelize.INTEGER,
  username: Sequelize.STRING,
});

var Room = orm.define('Room', {
  id: Sequelize.INTEGER,
  roomname: Sequelize.STRING

});
User.hasMany(Message);
Message.belongsTo(User);

Room.hasMany(Message);
Message.belongsTo(Room);

Message.sync();
User.sync();
Room.sync();

exports.User = User;
exports.Message = Message;
exports.Room = Room;
/*var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

connection.connect();

module.exports = connection; */