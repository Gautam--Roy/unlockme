require('./config/globalConfig')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const apiRouter = require('./routes/apiRouter')

const db = 'mongodb://localhost/unlockDB'


mongoose.connect(db)

mongoose.connection.on('connected', () => {
  console.log('Mongoose Connected')
})

mongoose.connection.on('error', () => {
  console.log('Mongoose Connection Error')
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose Disconnected')
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api', apiRouter)


app.use('/*', (req, res) => {
  res.send({
    Message : "unauthorized route access"
  })
})


app.listen(App.port, () => {
  console.log("Server Running on port " + App.port);
  console.log("Server root path : " + App.root);
})
