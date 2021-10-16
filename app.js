const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const dotenv = require('dotenv').config()
console.log(process.env.TARGET)

const app = express()

app.use(
  '/proxy/work',
  createProxyMiddleware({ target: process.env.TARGET || '', changeOrigin: true })
)
app.listen(9000)
