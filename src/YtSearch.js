import React from 'react'

import { Form } from 'semantic-ui-react'

export default class MyApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formData: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e, { formData }) {
    e.preventDefault()

    console.log('submitting')

    fetch(`/yt/search?q=${encodeURIComponent(formData.query)}`)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(e) {
        // client side redirection is a good idea as far as ajax is concerned
        window.location = '/oauth2'
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Form.Input name='query' placeholder='Search' />
        </Form.Field>
        <Form.Button type='submit'>Search</Form.Button>
      </Form>
    );
  }
}
