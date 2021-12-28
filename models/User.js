import mongoose from 'mongoose'
import Email from 'next-auth/providers/email'

const UserSchema = new mongoose.Schema({
  email: {type:String},
password:{type:String}

})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
