const mongoose = require('mongoose')
const Schema = mongoose.Schema



const VistorSchema = new Schema({
  ip : Schema.Types.Mixed,
  headers : Schema.Types.Mixed
})

const SearchSchema = new Schema({
  ip : Schema.Types.Mixed,
  userAgeant : Schema.Types.Mixed,
  searchTerm : Schema.Types.Mixed
})



module.exports = {
  Visitor : mongoose.model('Visitor', VistorSchema),
  Search : mongoose.model('Search', SearchSchema)
}
