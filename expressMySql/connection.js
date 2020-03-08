const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "classicmodels",
  multipleStatements: true
});

connection.connect(err => {
  if (!err) {
    console.log("DB Connected");
  } else {
    console.log(err);
  }
});

module.exports = connection;
