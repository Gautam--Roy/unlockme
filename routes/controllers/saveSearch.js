const Schemas = require('../../modules/db')

let ua = "user-agent"

module.exports = (req, res) => {

  const search = new Schemas.Search({
    ip : req.ip,
    headers : req.headers.ua,
    searchTerm : req.body.secret
  })

  search.save((err) => {
    if(err){
      console.log("Error :", err)
      res.end()
    }
  })


  res.end()
}
