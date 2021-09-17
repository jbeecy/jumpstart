import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateForm = ({ inquiry, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='subject'>
      <Form.Control
        as="textarea"
        required
        name='subject'
        value={inquiry.subject}
        placeholder='Updated Inquiry Subject'
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId='content'
      as="textarea"
      required
      name='review'
      value={inquiry.content}
      placeholder='Update Inquiry Content'
      onChange={handleChange}>
    </Form.Group>
    <Button type='submit'>Update Inquiry</Button>
  </Form>
)

export default UpdateForm
