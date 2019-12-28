const mongoose = require('mongoose')

const coursesSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  objType: {
    type: String,
    default: 'courses'
  },
  title: String,
  level: Number,
  // для кого
  forWhom: Array,
  // чого навчишся
  willLearn: Array,
  // чого навчишся
  willGet: Array,
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