const exerciseSchema = require('../models/exerciseSchema')
const mongoose = require('mongoose') 

exports.all = (req, res) => {
  exerciseSchema
  .find({})
  .exec((err, doc)=> {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.courseById = (req, res) => {
  exerciseSchema.findById(req.params.id)
  .exec((err, doc) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.create = (req, res) => {
  request = req.body
  const exercise = new exerciseSchema({
    _id: new mongoose.Types.ObjectId(),
    type: request.title,
    question: request.level,
    answers: request.forWhom,
    rightAnswer: request.willLearn
  })
  exercise
    .save()
    .then(result => {console.log(result)})
    .catch(err => console.log(err))
    res.sendStatus(200)
}

exports.edit = (req, res) => {
  exerciseSchema.updateMany({ _id: req.params.id}, { $set: req.body.exercise }, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}

exports.remove = (req, res) => {
  exerciseSchema.deleteOne({_id: req.params.id}, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}