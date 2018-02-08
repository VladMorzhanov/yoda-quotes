/* eslint consistent-return:0 */

const {API_URI} = require('./constants')
const express = require('express')
const logger = require('./logger')
const cors = require('cors')
const {json, urlencoded} = require('body-parser')
const argv = require('./argv')
const signals = ['SIGINT', 'SIGTERM']
const port = require('./port')
const {api} = require('./routers')
const setup = require('./middlewares/frontendMiddleware')
const isDev = process.env.NODE_ENV !== 'production'
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false
const resolve = require('path').resolve
const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))
app.use(API_URI, api)

// setup database
// const db = require('./db')
// app.set('db', db)

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
})

const customHost = argv.host || process.env.HOST
const host = customHost || null // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost'

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message)
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr)
      }

      logger.appStarted(port, prettyHost, url)
    })
  } else {
    logger.appStarted(port, prettyHost)
  }
})
