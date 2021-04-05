const mysql = require('mysql')
require('dotenv').config()


const db = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  user: "root",
  password: "",
  database: "smartkaksha_db",

})


module.exports = db