const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortId = require('shortid')

const UserSchema = new Schema({
  _id: {
    type: String,
    'default': shortId.generate
  },
  name: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('User', UserSchema)