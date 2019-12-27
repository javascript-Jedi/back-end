const mongoose = require('mongoose')

const coursesSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  title: String,
  level: Number,
  // для кого
  forWhom: String,
  // чого навчишся
  willLearn: String,
  // чого навчишся
  willGet: String,
  content: String,
  imgUrl: {
    type: String,
    default: ''
  },
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  date: {
    type: String,
    default: new Date()
  },
  category: String
}, {collection: 'courses'})

module.exports = mongoose.model('Course', coursesSchema)