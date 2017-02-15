import React from 'react'

import { Form, Divider, Loader } from 'semantic-ui-react'

export default class YtSearch extends React.Component {
  state = {
    formData: {},
    results: [],
    searching: false
  }

  handleSubmit = (e, { formData }) => {
    e.preventDefault()
    this.setState({ formData })

    this.setState({ searching: true })

    fetch(`/yt/search?q=${encodeURIComponent(formData.query)}`)
      .then((response) => {
        return response.json()
      }).then((json) => {
        console.log('parsed json', json)
        this.setState({ results: json, searching: false })
      }).catch((e) => (console.log('Error: ', e)))
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline>
            <Form.Input name='query' placeholder='Search' />
            <Form.Button type='submit'>
              <i className="fa fa-search" aria-hidden="true"></i>
            </Form.Button>
          </Form.Group>
        </Form>
        <Divider />
        <Loader active={this.state.searching} inline='centered' />
      </div>
    );
  }
}
