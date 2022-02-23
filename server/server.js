const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 4005
// process.env.PORT to get the port from heroku's env file

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.css'))
})

app.get('/js', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.js'))
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})