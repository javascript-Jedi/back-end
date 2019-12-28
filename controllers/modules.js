const moduleSchema = require('../models/moduleSchema')
const mongoose = require('mongoose') 

exports.all = (req, res) => {
  moduleSchema.find({})
  .populate('lessons')
  .exec((err, doc)=> {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.moduleById = (req, res) => {
  moduleSchema
  .findById(req.params.id)
  .populate('lessons')
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
  const module = new moduleSchema({
    _id: new mongoose.Types.ObjectId(),
    title: request.title,
    level: request.level,
    imgUrl: request.imgUrl,
    lessons: request.lessons,
  })
  module
    .save()
    .then(result => {console.log(result)})
    .catch(err => console.log(err))
    res.sendStatus(200)
}

exports.edit = (req, res) => {
  moduleSchema.updateMany({ _id: req.params.id}, { $set: req.body.module }, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}

exports.remove = (req, res) => {
  moduleSchema.deleteOne({_id: req.params.id}, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}