/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { updateInquiry, getInquiryById, showInquiries } from '../../api/inquiries'
import UpdateForm from './UpdateForm'

class UpdateInquiry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inquiry: {
        subject: '',
        content: ''
      }
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props
    getInquiryById(match.params.id, user)
      .then((res) => this.setState({ inquiry: res.data.inquiry[0] }))
      .then(() =>
        msgAlert({
          heading: 'Update the inquiry',
          message: 'Go ahead and update your inquiry now',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'unable to retrieve inquiry',
          message: 'something went wrong.' + err.message,
          variant: 'danger'
        }))
  }

  handleChange = (event) => {
    const userInput = { [event.target.name]: event.target.value }
    this.setState((currState) => {
      return { inquiry: { ...currState.inquiry, ...userInput } }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user, msgAlert, history, match } = this.props
    updateInquiry(this.state.inquiry, match.params.id, user)
      .then(() =>
        msgAlert({
          heading: 'Inquiry updated!',
          message: 'Inquiry has been successfully updated!',
          variant: 'success'
        })
      )
      .then(() => history.push('/inquiries'))
      .then(() => showInquiries(user)
        .then((response) => this.setState({
          inquiries: response.data.inquiries
        }))
        .then(() => msgAlert({
          heading: 'Success!',
          message: 'Here are the inquiries again.',
          variant: 'success'
        })))
      .catch((err) =>
        msgAlert({
          heading: 'Update failed.',
          message: 'Something went wrong with your update: ' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    return (
      <>
        <h3>Update your inquiry below</h3>
        <UpdateForm
          inquiry={this.state.inquiry}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

export default withRouter(UpdateInquiry)
