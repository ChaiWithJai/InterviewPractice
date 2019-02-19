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

router.post('/:userId', async (req, res, next) => {
  console.log('req.body', req.body)
  try {
    const questionText = req.body.questionText
    const userId = req.params.userId
    const questionSent = await Question.create({questionText, userId})
    res.send(questionSent)
  } catch (err) {
    next(err)
  }
})
