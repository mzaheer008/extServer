
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ssm",
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
});
function connectDB() {
  connection.connect(function (err, res) {
    if (res) {
      console.log("database connected");
    }
    if (err) {
      return console.error("could not connect to  crankup", err);
    }
  });
}

module.exports = { connectDB, connection };
