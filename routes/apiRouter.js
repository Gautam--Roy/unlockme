const express = require('express')
const router = express.Router()
const Schemas = require('../modules/db')




router.all('/', (req, res) => {
  res.redirect('/')
})

router.get('/9999', (req, res) => {
  const ip = req.ip
  console.log("IP :", ip);
  console.log("HEADERS :", req.headers);

  const visitorData = new Schemas.Visitor({
    ip : ip,
    headers : req.headers
  })

  visitorData.save((err) => {
    if(err){
      console.log("Error :", err)
      return
    }
    console.log("Data was saved");
  })


  res.send({
    IP : ip,
    Headers : req.headers
  })
})





module.exports = router
