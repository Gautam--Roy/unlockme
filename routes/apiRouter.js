const express = require('express')
const router = express.Router()
const Schemas = require('../modules/db')




router.all('/', (req, res) => {
  res.redirect('/')
})

router.get('/9999', (req, res) => {
  console.log("IP :", req.ip);
  console.log("headers :", req.headers);

  const visitorData = new Schemas.Visitor({
    ip : res.ip,
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
    IP : req.ips,
    Headers : req.headers
  })
})





module.exports = router
