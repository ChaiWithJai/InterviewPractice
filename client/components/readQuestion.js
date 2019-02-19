import React, {Component} from 'react'
import {getAllQuestions} from '../store/question'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class readQuestion extends Component {
  async componentDidMount() {
    await this.props.getAllQuestions()
  }
  render() {
    const {questionBank} = this.props
    return (
      <div>
        <p>Read a question here</p>
        <table>
          <tbody>
            {questionBank.map(val => {
              return (
                <tr key={val.id}>
                  <td>{val.questionText}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    questionBank: state.question.questionBank
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllQuestions: () => dispatch(getAllQuestions())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(readQuestion)
)
