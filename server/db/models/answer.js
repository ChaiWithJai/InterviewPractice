const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios')

const Answer = db.define('answer', {
  answerText: {
    type: Sequelize.TEXT
  }
})

module.exports = Answer
