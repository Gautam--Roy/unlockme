const Schemas = require('../../modules/db')


module.exports = (req, res) => {


    Schemas.Visitor.find()
    .then(allvisitors => {
      res.send(allvisitors)
    })


}
