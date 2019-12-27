const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  type: String,
  question: String,
  answers: Array,
  rightAnswer: String,
  date: {
    type: String,
    default: new Date()
  }
}, {collection: 'exercises'})

module.exports = mongoose.model('Exercise', exerciseSchema)