const mongoose = require('mongoose')

const lessonSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  objType: {
    type: String,
    default: 'lessons'
  },
  title: String,
  parts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Part' }],
  date: {
    type: String,
    default: new Date()
  }
}, {collection: 'lessons'})

module.exports = mongoose.model('Lesson', lessonSchema)