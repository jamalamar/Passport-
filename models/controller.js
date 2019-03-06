
let express = require('express')
let router = express.Router()
let User = require('./schema.js')
let passport = require('passport')
 


  // router.get('/', function (req, res) {
  //     res.render('index', { user : req.user });
  // });

  // router.get('/register', function(req, res) {
  //     res.render('register', { });
  // });

  // router.post('/register', function(req, res) {
  //   Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
  //       if (err) {
  //           return res.render('register', { account : account });
  //       }

  //       passport.authenticate('local')(req, res, function () {
  //         res.redirect('/');
  //       });
  //   });
  // });

  // router.get('/login', function(req, res) {
  //     res.render('login', { user : req.user });
  // });

  // router.post('/login', passport.authenticate('local'), function(req, res) {
  //     res.redirect('/');
  // });

  // router.get('/logout', function(req, res) {
  //     req.logout();
  //     res.redirect('/');
  // });

  // router.get('/ping', function(req, res){
  //     res.send("pong!", 200);
  // });






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