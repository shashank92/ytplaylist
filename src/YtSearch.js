import React from 'react'

import { LocalForm, Control } from 'react-redux-form'

export default class MyApp extends React.Component {
  handleChange(values) {}
  handleUpdate(form) {}

  handleSubmit(values) {
    console.log('submitting')
    fetch(`/yt/search?q=${encodeURIComponent(values.query)}`)
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
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)} >
        <label>Search YouTube?</label>
        <Control.text model=".query" />
        <button>Submit!</button>
      </LocalForm>
    );
  }
}
