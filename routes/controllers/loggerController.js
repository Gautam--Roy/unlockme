const Schemas = require('../../modules/db')


module.exports = (req, res) => {

  const visitor = new Schemas.Visitor({
    ip : req.ip,
    headers : req.headers
  })

  visitor.save((err) => {
    if(err){
      console.log("Error :", err)
      res.end()
    }
  })


  res.end()
}
