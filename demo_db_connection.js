var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1337Cod31337"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});