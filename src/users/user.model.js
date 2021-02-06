import mongoose from 'mongoose'

export default User = mongoose.model('User', new mongoose.Schema({
	username: String,
	email: String,
	password: String,
	role: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Role'
	}]
}))