const {Router} = require('express')

const User = require('../controllers/user')
const Auth = require('../controllers/auth')

const JwtCheck = require('../middleware/jwt-check')
const ErrorHandler = require('../middleware/error-handler')
const NotFound = require('../middleware/not-found')

/**
 * Express router
 * @type {*|Router}
 */
const router = new Router()

router
  .post('/login', Auth.login)
  .post('/facebook-auth', Auth.facebook)
  .post('/google-auth', Auth.google)
  .get('/user', JwtCheck, User.retrieve)
  .use(ErrorHandler())
  .use(NotFound('Not Found'))

module.exports = router
