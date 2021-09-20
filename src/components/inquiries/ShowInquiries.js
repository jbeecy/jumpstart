import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { showInquiries, deleteInquiry } from '../../api/inquiries'
// import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

class ShowInquiries extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inquiries: []
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props
    showInquiries(user)
      .then((response) => this.setState({
        inquiries: response.data.inquiries
      }))
      .then(() => msgAlert({ heading: 'Success', message: 'Here\'s the inquiries', variant: 'success' }))
      .then(console.log(user.email))
      .catch(err => msgAlert({ heading: 'Index failed :(', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  handleDelete = (event) => {
    const { msgAlert, user, history } = this.props
    event.preventDefault()
    const inquiryDataId = event.target.attributes.getNamedItem('data-id').value
    deleteInquiry(inquiryDataId, user)
      .then(() =>
        msgAlert({
          heading: 'Inquiry deleted.',
          message: 'Your inquiry has been successfully deleted.',
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
          heading: 'Delete failed.',
          message: 'Unable to delete. If you are not the owner you cannot delete this.' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    const cardContainerLayout = {
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'row wrap'
    }
    const { history } = this.props
    const inquiries = this.state.inquiries.map(inquiry => (
      <Card key={inquiry._id} style={{ width: '45rem' }}>
        <Card.Body>
          <Card.Title>{this.props.user.email}</Card.Title>
          <Card.Text>{inquiry.subject}</Card.Text>
          <Card.Text>{inquiry.content}</Card.Text>
          <Button
            data-id={inquiry._id}
            style={{ margin: '10px', alignItems: 'center' }}
            onClick={() => history.push(`/inquiries/${inquiry._id}`)}
          >
            Update Inquiry
          </Button>
          <Button
            variant='btn btn-outline-danger'
            onClick={this.handleDelete}
            data-id={inquiry._id}
            className='button'>
            Delete Inquiry
          </Button>
        </Card.Body>
      </Card>
    ))
    return (
      <div style={cardContainerLayout}>
        <h4>Inquiries</h4>
        <ul>
          {inquiries}
        </ul>
      </div>
    )
  }
}

export default withRouter(ShowInquiries)
