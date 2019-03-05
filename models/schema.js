const mongoose = require('mongoose')
Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new mongoose.Schema(
	{
		username: String,
		password: String
	},
	{
		collection: "testData"
	}
)

UserSchema.plugin(passportLocalMongoose)

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel