/**
 * User mongoose model
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bnCrypt = require('bcrypt-nodejs')

// user schema
const User = new Schema(
  {
    email: {type: String, unique: true, default: 'NaN'},
    googleId: {type: String, default: 'NaN'},
    facebookId: {type: String, default: 'NaN'},
    photoUrl: {type: String, default: 'NaN'},
    password: {type: String, required: true},
    token: {type: String, default: 'NaN'}
  })

/**
 * hash password before user is saved
 */
User.pre('save', function (next) {
  const user = this

  // hash the password only if the password has been changed or user is new
  if (!user.isModified('password')) return next()

  if (!user.dateCreated) {
    user.dateCreated = String(Math.round((new Date()).getTime() / 1000) +
      (new Date()).getTimezoneOffset() * 60)
  }

  // generate the hash
  if (user.password !== 'NaN') {
    bnCrypt.hash(user.password, null, null, function (err, hash) {
      if (err) {
        throw new Error(err)
      }

      // change the password to the hashed version
      user.password = hash
      next()
    })
  } else {
    next()
  }
})

/**
 * method to compare a given password with the database hash
 * @param password - password to hash
 * @returns {*}
 */
User.methods.comparePassword = function (password) {
  const user = this

  if (user.password === 'NaN') {
    return false
  }

  return bnCrypt.compareSync(password, user.password)
}

// return the model
module.exports = mongoose.model('User', User)
