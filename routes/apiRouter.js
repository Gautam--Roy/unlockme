const express = require('express')
const router = express.Router()

const loggerController = require('./controllers/loggerController')
const getlog = require('./controllers/getlog')


router.all('/', (req, res) => {
  res.redirect('/')
})


router.use('/9999', loggerController)
router.use('/9696', getlog)


module.exports = router
