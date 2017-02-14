import React from 'react'

import { LocalForm, Control } from 'react-redux-form';

export default class MyApp extends React.Component {
  handleChange(values) {
    console.log(values)
  }

  handleUpdate(form) {
    console.log(form)
  }

  handleSubmit(values) {
    console.log(values)
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
