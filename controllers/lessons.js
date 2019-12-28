const lessonSchema = require('../models/lessonSchema')
const mongoose = require('mongoose') 

exports.all = (req, res) => {
  lessonSchema
  .find({})
  .populate('parts')
  .exec((err, doc)=> {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.lessonById = (req, res) => {
  lessonSchema
  .findById(req.params.id)
  .populate('parts')
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
  const lesson = new courseSchema({
    _id: new mongoose.Types.ObjectId(),
    title: request.title,
    parts: request.parts
  })
  lesson
    .save()
    .then(result => {console.log(result)})
    .catch(err => console.log(err))
    res.sendStatus(200)
}

exports.edit = (req, res) => {
  lessonSchema.updateMany({ _id: req.params.id}, { $set: req.body.lesson }, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}

exports.remove = (req, res) => {
  lessonSchema.deleteOne({_id: req.params.id}, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}