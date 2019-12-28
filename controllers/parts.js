const partSchema = require('../models/partSchema')
const mongoose = require('mongoose') 

exports.all = (req, res) => {
  partSchema
  .find({})
  .populate('exercise')
  .exec((err, doc)=> {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.partById = (req, res) => {
  partSchema.findById(req.params.id)
  .populate('exercise')
  .exec((err, doc)=> {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.create = (req, res) => {
  request = req.body
  const part = new partSchema({
    _id: new mongoose.Types.ObjectId(),
    title: request.title,
    video: request.level,
    text: request.forWhom,
    exercise: request.willLearn
  })
  part
    .save()
    .then(result => {console.log(result)})
    .catch(err => console.log(err))
    res.sendStatus(200)
}

exports.edit = (req, res) => {
  partSchema.updateMany({ _id: req.params.id}, { $set: req.body.part }, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}

exports.remove = (req, res) => {
  partSchema.deleteOne({_id: req.params.id}, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}