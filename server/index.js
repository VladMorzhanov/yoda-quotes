const {API_URI} = require('./constants')
const express = require('express')
const logger = require('./logger')
const cors = require('cors')
const {json, urlencoded} = require('body-parser')
const argv = require('./argv')
const port = require('./port')
const {api} = require('./routers')
const setup = require('./middlewares/frontendMiddleware')
const isDev = process.env.NODE_ENV !== 'production'
const resolve = require('path').resolve
const app = express()
const ngrok = (isDev && process.env.ENABLE_TUNNEL) ||
argv.tunnel ? require('ngrok') : false

app.use(cors())
app.use(json())
app.use(urlencoded({extended: false}))
app.use(API_URI, api)

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
})

const customHost = argv.host || process.env.HOST
const host = customHost || null
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
