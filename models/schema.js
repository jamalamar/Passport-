const mongoose = require('mongoose')


const AuthSchema = new mongoose.Schema(
	{
		username: String,
		password: String
	},
	{
		collection: "passport-auth"
	}
)


const AuthModel = mongoose.model('Passport', AuthSchema)

module.exports = AuthModel