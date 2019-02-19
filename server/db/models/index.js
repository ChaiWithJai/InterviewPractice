const User = require('./user')
const Question = require('./question')
const Answer = require('./answer')

Question.belongsTo(User)
User.hasMany(Question)

User.hasMany(Answer)
Question.hasMany(Answer)
Answer.belongsTo(Question)

module.exports = {
  User,
  Question,
  Answer
}
