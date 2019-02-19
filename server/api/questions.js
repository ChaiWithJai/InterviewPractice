const router = require('express').Router()
const {User, Answer, Question} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.findAll()
    res.json(questions)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const questionText = req.body.questionText
    const userId = req.params.userId
    await Question.create({questionText, userId})
    res.send('Question was created')
  } catch (err) {
    next(err)
  }
})
