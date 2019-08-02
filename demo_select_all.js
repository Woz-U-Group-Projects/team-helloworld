var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "new_schema"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM new_table", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });