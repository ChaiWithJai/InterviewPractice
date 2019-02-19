import React, {Component} from 'react'
import {getQuestion} from '../store/question'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class askQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = async evt => {
    evt.preventDefault()
    await this.props.getQuestion(this.props.userId)
    this.setState({question: ''})
  }
  handleChange = evt => {
    evt.preventDefault()
    this.setState({question: evt.target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Ask A Question:
            <input
              type="text"
              value={this.state.question}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestion: userId => dispatch(getQuestion(userId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(askQuestion)
)
