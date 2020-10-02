const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/load', controller.home)

module.exports = router