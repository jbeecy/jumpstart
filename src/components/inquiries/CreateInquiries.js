import React, { Component } from 'react'
import { createInquiry } from '../../api/inquiries'
// import { withRouter } from 'react-router'
import { data } from 'autoprefixer'

class CreateInquiry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inquiries: {
        subject: '',
        content: ''
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    console.log(this.props)
    const { user } = this.props
    createInquiry(data, user)
      .then()
  }

  render () {
    return (
      <div>
        <h3>Post your inquiry</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Subject</label>
          <button type="submit">Create inquiry</button>
        </form>
      </div>
    )
  }
}

export default CreateInquiry
