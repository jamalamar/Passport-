
let express = require('express')
let router = express.Router()
let Auth = require('./schema.js')


//Get All
router.get('/', (req, res)=> {
	Auth
		.find()
		.then((users)=> {
			res.json(users)
		})
})


//Create
router.post('/', (req, res)=> {
	let auth = new Auth({
		username: req.body.username,
		password: req.body.password,
	})

	auth
	.save()
	.then((savedAuth)=> {
		res.json(savedAuth)
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
router.delete('/users/:id', (req, res)=> {
	let id = req.params.id
	Auth
		.findByIdAndDelete(id)
		.then(()=> {
			res.json({deleted: true})
		})
})



module.exports = router