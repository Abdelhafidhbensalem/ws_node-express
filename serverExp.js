const express = require('express')
const check=require('./middlewares/checkTime')
const app = express()
//console.log(__dirname);
app.use(express.static('./public'))
app.use(check)
app.get("/about" , (req, res) => {
    res.sendFile("about.html",{root:__dirname});
})
app.get("/home", (req, res) => {
    res.sendFile("home.html",{root:__dirname})
})

const port = 7000
app.listen(7000, (err) => {
    err ? console.log(error) : console.log("server is running on port " + port);
})

