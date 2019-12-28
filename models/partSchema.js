const mongoose = require('mongoose')

const partSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  objType: {
    type: String,
    default: 'parts'
  },
  title: String,
  video: String,
  text: String,
  // text: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Text' }],
  exercise: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
  date: {
    type: String,
    default: new Date()
  }
}, {collection: 'parts'})

module.exports = mongoose.model('Part', partSchema)