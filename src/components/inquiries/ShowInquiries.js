import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { showInquiries } from '../../api/inquiries'
import { Link } from 'react-router-dom'

class ShowInquiries extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inquiries: []
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props
    showInquiries()
      .then((response) => this.setState({
        inquiries: response.data.inquiries
      }))
      .then(() => msgAlert({ heading: 'Success', message: 'Here\'s the inquiries', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Index failed :(', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  render () {
    const inquiries = this.state.inquiries.map(inquiry => (
      <li key={inquiry.id}>
        <Link to={ `/inquiries/${inquiry._id}` }>{inquiry.subject}</Link>
      </li>
    ))
    return (
      <div>
        <h4>Inquiries</h4>
        <ul>
          {inquiries}
        </ul>
      </div>
    )
  }
}

export default withRouter(ShowInquiries)
