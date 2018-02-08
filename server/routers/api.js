const {Router} = require('express')
const Quote = require('../controllers/quote')

const ErrorHandler = require('../middleware/error-handler')
const NotFound = require('../middleware/not-found')

/**
 * Express router
 * @type {*|Router}
 */
const router = new Router()

router
  .get('/quote', Quote.getQuote)
  .use(ErrorHandler())
  .use(NotFound('Not Found'))

module.exports = router
