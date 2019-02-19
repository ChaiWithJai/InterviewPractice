import axios from 'axios'

const GOT_QUESTION = 'GOT_QUESTION'

const initialState = {question: ''}

const gotQuestion = question => ({
  type: GOT_QUESTION,
  question
})

export const getQuestion = (question, userId) => {
  console.log('what got passed in as question prop', question)
  return async dispatch => {
    try {
      const {data: questionObj} = await axios.post(`/api/questions/${userId}`, {
        questionText: question
      })
      console.log('data', questionObj)
      dispatch(gotQuestion(questionObj))
    } catch (err) {
      console.error('Issue with posting your question', err.message)
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
    default:
      return state
  }
}
