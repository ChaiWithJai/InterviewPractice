const router = require('express').Router()
const {User, Answer, Question} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const answers = await Answer.findAll()
    res.json(answers)
  } catch (err) {
    next(err)
  }
})
