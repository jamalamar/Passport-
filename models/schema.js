const mongoose = require('mongoose')


const AuthSchema = new mongoose.Schema(
	{
		username: String,
		password: String
	},
	{
		collection: "testData"
	}
)


const AuthModel = mongoose.model('Auth', AuthSchema)

module.exports = AuthModel