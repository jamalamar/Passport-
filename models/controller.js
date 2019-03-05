
let express = require('express')
let router = express.Router()
let User = require('./schema.js')
let passport = require('passport')
let LocalStrategy = require('passport-local-mongoose')
 
// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());
 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));



//Get All
router.get('/users', (req, res)=> {
	User
		.find()
		.then((users)=> {
			res.json(users)
		})
})


//Register
router.post('/register', (req, res)=> {
	let user = new User({
		username: req.body.username,
		password: req.body.password,
	})

	user
	.save()
	.then((savedAuth)=> {
		res.json(savedAuth)
	})
})


//Login
// router.post('/login', 
//   passport.authenticate({ failureRedirect: '/login' }),
//   (req, res)=> {
//     res.redirect('/users');
//   });


router.post('/login', (req, res)=> {
	User
	.find({
		username: req.body.username,
		password: req.body.password,
	})
	.then((users)=>{
		res.json(users)
	})
})


//Update
router.put('/')

router.delete('/users/:username', (req, res)=> {
	let username = req.params.username
	Auth
		.deleteMany({username})
		.then(()=> {
			res.json({deleted: true})
		})
})


//Delete
router.delete('/users/delete/:id', (req, res)=> {
	let id = req.params.id
	Auth
		.findByIdAndDelete(id)
		.then(()=> {
			res.json({deleted: true})
		})
})



module.exports = router