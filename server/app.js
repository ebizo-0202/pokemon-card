const express = require('express')

const { nuxt } = require('./core/nuxt')
const { envMiddleware } = require('./middlewares/env-middleware')

const app = express()

if (process.env.ENDPOINT_ENV === 'api_gw') {
  app.use(envMiddleware)
}

app.use(async (req, res, next) => {
  await nuxt.ready()
  nuxt.render(req, res, next)
})

module.exports.app = app
