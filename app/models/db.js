const mysql = require("mysql")
const connection = require("mysql/lib/Connection")
const dbConfig = require("../config/db.config")

// create a conection to the database
const conection = mysql.createConnection({
    host: dbConfig.HOST, 
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

// open the mySQL connection 
connection.connect(error => {
    if(error) throw error
    console.log("Successfully connected to the database!")
})

 module.exports = connection