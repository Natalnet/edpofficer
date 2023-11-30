const express = require('express')
const { SendMail } = require('./controllers/mail')

const routes = express()

routes.post('/send', SendMail)

module.exports = routes