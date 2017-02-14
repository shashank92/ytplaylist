import React from 'react'
import App from './App'

const Root = () => {
  try {
    return (
      <App />
    )
  } catch(e) {
    return (
      <div>{e}</div>
    )
  }
}

export default Root
