const express = require('express')
const passport = require('../middleware/passport')
const usersControllers = require('../controllers/users')
const jwt = require('jsonwebtoken')
const authRoutes = require('./auth')
const router = express.Router()

const coursesControllers = require('../controllers/courses')
const modulesControllers = require('../controllers/modules')
const lessonsControllers = require('../controllers/lessons')
const partsControllers = require('../controllers/parts')
const exercisesControllers = require('../controllers/exercises')

router.get('/api/me', (req, res) => {
  passport.authenticate('jwt', { session: false }, (err, user, message) => {
    if (err || !user) {
      console.log(err)
      console.log(user)
      return res.status(400).json({ message })
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err)
      }
// jwt secret from .env
      const token = jwt.sign(user.toJSON(), '9f34ur783f39', {expiresIn: '1d'})
      console.log(token)
      return res.json({ token, user })
    })
  }) (req, res)
})

router.get(
  '/checktoken',
  // jwt.validate(),
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.sendStatus(200)
  }
)

// courses
router.get('/courses', coursesControllers.all)

router.get('/courses/:id', coursesControllers.courseById)

router.post('/courses', coursesControllers.create)

router.put('/courses/:id', coursesControllers.edit)

router.delete('/courses/:id', coursesControllers.remove)

// modules
router.get('/modules', modulesControllers.all)

router.get('/modules/:id', modulesControllers.moduleById)

router.post('/modules', modulesControllers.create)

router.put('/modules/:id', modulesControllers.edit)

router.delete('/modules/:id', modulesControllers.remove)


// lessons
router.get('/lessons', lessonsControllers.all)

router.get('/lessons/:id', lessonsControllers.lessonById)

router.post('/lessons', lessonsControllers.create)

router.put('/lessons/:id', lessonsControllers.edit)

router.delete('/lessons/:id', lessonsControllers.remove)

// parts
router.get('/parts', partsControllers.all)

router.get('/parts/:id', partsControllers.partById)

router.post('/parts', partsControllers.create)

router.put('/parts/:id', partsControllers.edit)

router.delete('/parts/:id', partsControllers.remove)

// exercises
router.get('/exercises', exercisesControllers.all)

router.get('/exercises/:id', exercisesControllers.courseById)

router.post('/exercises', exercisesControllers.create)

router.put('/exercises/:id', exercisesControllers.edit)

router.delete('/exercises/:id', exercisesControllers.remove)

router.use('/', authRoutes)

module.exports = router
