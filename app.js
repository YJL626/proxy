const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const dotenv = require('dotenv').config()
console.log(process.env.WORK_TARGET)

const app = express()

app.use(
  '/proxy/mc',
  createProxyMiddleware({ target: process.env.WORK_TARGET || '', changeOrigin: true })
)
app.listen(+process.env.PROT || 9000)
