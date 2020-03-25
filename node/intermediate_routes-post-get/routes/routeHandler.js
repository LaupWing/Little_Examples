const getLogin = require('../routes/GET/login')
const express = require('express')
const router = new express.Router()

router
    .get('/', getLogin)

module.exports = router