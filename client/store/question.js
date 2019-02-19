import axios from 'axios'

const GOT_QUESTION = 'GOT_QUESTION'

const initialState = {question: ''}

const gotQuestion = question => ({
  type: GOT_QUESTION,
  question
})

export const getQuestion = userId => {
  return async dispatch => {
    try {
      const {data: question} = await axios.post(`/api/questions/${userId}`)
      dispatch(gotQuestion(question))
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
