var express, app, bodyParser, server, mongoose, path

express = require('express')
app = express()
bodyParser = require('body-parser')
path = require('path')

app.use(bodyParser.json())

app.use(express.static(__dirname + '/petShelter/dist/petShelter'))

require('./server/config/mongoose')

mongoose = require('mongoose')
mongoose.promise = global.Promise

var Pet = mongoose.model('Pet')

require('./server/config/routes')(app)

server = app.listen(1337)

app.all("*", (req, res,next)=>{
    res.sendFile(path.resolve("./petShelter/dist/petShelter/index.html"))
})