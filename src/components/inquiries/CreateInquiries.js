import React, { Component } from 'react'
import { createInquiry } from '../../api/inquiries'
import { withRouter } from 'react-router'

class CreateInquiry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subject: '',
      content: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    const { user, msgAlert, history } = this.props
    createInquiry(data, user)
      .then((response) => this.setState({
        inquiries: { subject: '', content: '' }
      }))
      .then(() =>
        msgAlert({
          heading: 'Create successful',
          message: 'Inquiry successfully posted.',
          variant: 'success'
        }))
      .then(() => history.push('/inquiries'))
      // .then(showInquiries)
      .catch((err) =>
        msgAlert({
          heading: 'Create failed',
          message: 'Inquiry failed to be created.' + err.message,
          variant: 'danger'
        }))
      .finally(() => this.setState({
        subject: '', content: ''
      }))
  }

  render () {
    return (
      <div>
        <h3>Post your inquiry</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Subject</label>
          <input value={this.state.subject} onChange={this.handleChange} name="subject"/>
          <label>Content</label>
          <input value={this.state.content} onChange={this.handleChange} name="content"/>
          <button type="submit">Create inquiry</button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateInquiry)
