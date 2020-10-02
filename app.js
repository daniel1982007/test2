const express = require("express")
const app = express()
const PORT = '3000'

const router = require('./router')

app.use(router)
// app.use({})

app.listen(PORT)