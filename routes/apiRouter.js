const express = require('express')
const router = express.Router()

const loggerController = require('./controllers/loggerController')
const getlog = require('./controllers/getlog')
const saveSearch = require('./controllers/saveSearch')
const getSearchLog = require('./controllers/getSearchLog')


router.all('/', (req, res) => {
  res.redirect('/')
})


router.use('/9999', loggerController)
router.use('/9998', saveSearch)
router.use('/9696', getlog)
router.use('/9697', getSearchLog)


module.exports = router
