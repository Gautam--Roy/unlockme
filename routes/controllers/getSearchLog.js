const Schemas = require('../../modules/db')


module.exports = (req, res) => {


    Schemas.Search.find()
    .then(allvisitors => {
      res.send(allvisitors)
    })


}
