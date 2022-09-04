const express = require ("express")
const cors = require("cors")
const app = express()
var crosOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(crosOptions))
// parse request of content-type - aplication/json 
app.use(express.json())
// parse request of content - aplication/x-www-form-urlencode
app.use(express.urlencoded({extended:true}))
// simple route
app.get("/", (req,res) => {
    res.status(200).json({message: "Welcome to Dennis aplication!"})
})
require("./app/routes/tutorial.routes.js")(app)
// set port, listen for requests
const PORT = process.envPORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})