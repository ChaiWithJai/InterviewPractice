import axios from 'axios'

const GOT_QUESTION = 'GOT_QUESTION'
const GOT_ALL_QUESTIONS = 'GOT_ALL_QUESTIONS'

const initialState = {question: '', questionBank: []}

const gotQuestion = question => ({
  type: GOT_QUESTION,
  question
})

const gotAllQuestions = questionBank => ({
  type: GOT_ALL_QUESTIONS,
  questionBank
})

export const getQuestion = (question, userId) => {
  return async dispatch => {
    try {
      const {data: questionObj} = await axios.post(`/api/questions/${userId}`, {
        questionText: question
      })
      dispatch(gotQuestion(questionObj))
    } catch (err) {
      console.error('Issue with posting your question', err.message)
    }
  }
}

export const getAllQuestions = () => {
  return async dispatch => {
    try {
      const {data: questions} = await axios.get(`/api/questions`)
      dispatch(gotAllQuestions(questions))
    } catch (err) {
      console.error('Issue getting all questions', err.message)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_QUESTION:
      return {
        ...state,
        question: action.question
      }
    case GOT_ALL_QUESTIONS:
      return {
        ...state,
        questionBank: action.questionBank
      }
    default:
      return state
  }
}
