
let express = require('express')
let mongoose = require('mongoose')
let app = express()
let userRouter = require('./models/controller')
let bodyParser = require('body-parser')
let session =require('express-session')

mongoose.connect('mongodb://localhost:27017/passport-auth', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let errorMiddleWare = function(error, req, res, next) {
  res.status(500).json({error: true})
}

app.use(errorMiddleWare)
app.use(session({ 
  secret: 'keyboardog',
  resave: false,
  saveUninitialized: true, 
  cookie: { maxAge: 3600000 }
  })
)
app.use('/', userRouter)


const PORT = 9000

app.listen(PORT)
console.log("Listening on port: ", PORT)
