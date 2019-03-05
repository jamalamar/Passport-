const mongoose = require('mongoose')

const Auth = require('./models/schema.js')

mongoose.connect('mongodb://localhost:27017/passport-auth', { useNewUrlParser: true} )


database = mongoose.connection

database.on("error", ()=> {
  console.log("Oh no!")
  console.log(error)
})

database.on("open", ()=> {
  console.log("Connected")
})