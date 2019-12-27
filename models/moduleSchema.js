const mongoose = require('mongoose')

const moduleSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  title: String,
  level: Number,
  imgUrl: {
    type: String,
    default: ''
  },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  date: {
    type: String,
    default: new Date()
  }
}, {collection: 'modules'})

module.exports = mongoose.model('Module', moduleSchema)