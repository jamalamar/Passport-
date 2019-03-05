const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')


const AuthSchema = new mongoose.Schema(
	{
		username: String,
		password: String
	},
	{
		collection: "testData"
	}
)

AuthSchema.plugin(passportLocalMongoose)

const AuthModel = mongoose.model('Auth', AuthSchema)

module.exports = AuthModel