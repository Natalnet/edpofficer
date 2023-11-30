// require('dotenv').config()

const express = require('express')
const routes = require('./routes')


const server = express();

server.use(express.json())

server.use(routes)

server.listen(3001)

server.get("/", (req, res) => {
  res.send("Hello, nodemailerProject!");
});