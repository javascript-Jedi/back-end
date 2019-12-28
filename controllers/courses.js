const courseSchema = require('../models/courseSchema')
const mongoose = require('mongoose') 

exports.all = (req, res) => {
  courseSchema
  .find({})
  .populate('modules')
  .exec((err, doc)=> {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
}

exports.courseById = (req, res) => {
  courseSchema
  .findById(req.params.id)
  .populate('modules')
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
  const course = new courseSchema({
    _id: new mongoose.Types.ObjectId(),
    title: request.title,
    level: request.level,
    forWhom: request.forWhom,
    willLearn: request.willLearn,
    willGet: request.willGet,
    modules: request.modules,
    content: request.content,
    imgUrl: request.imgUrl,
    category: request.category,
  })
  course
    .save()
    .then(result => {console.log(result)})
    .catch(err => console.log(err))
    res.sendStatus(200)
}

exports.edit = (req, res) => {
  courseSchema.updateMany({ _id: req.params.id}, { $set: req.body.course }, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}

exports.remove = (req, res) => {
  courseSchema.deleteOne({_id: req.params.id}, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(result)
  })
}