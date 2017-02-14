import React from 'react'

export default class Playlists extends React.Component {
  componentDidMount() {
    console.log('playlists have mounted')
  }

  render() {
    return (
      <div>
        <h3>Your Playlists</h3>
      </div>
    );
  }
}
