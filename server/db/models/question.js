const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios')

const Question = db.define('question', {
  questionText: {
    type: Sequelize.STRING
  }
})

module.exports = Question
