import React from 'react'
import { Button, Item, Loader } from 'semantic-ui-react'

export default class Playlists extends React.Component {
  state = {
    playlists: [],
    loadingPlaylists: false
  }

  handleClick = (e) => {
    console.log('click event:')
    console.log(e)
  }

  componentDidMount() {
    this.setState({ loadingPlaylists: true })

    fetch('/yt/playlists')
      .then((response) => {
        return response.json()
      }).then((json) => {
        console.log('parsed json', json)
        this.setState({ playlists: json, loadingPlaylists: false })
      }).catch((e) => (console.log('Error: ', e)))
  }

  render() {
    const playlists = this.state.playlists;
    const playlistsItemList = playlists.map((playlist) => {
      const { url, width, height } = playlist.thumbnail;
      return (
        <Item key={playlist.id} onClick={this.handleClick}>
          <Item.Image width={ width } height={ height } src={ url } />

          <Item.Content>
            <Item.Header>{ playlist.title }</Item.Header>
            <Item.Description>{ playlist.description }</Item.Description>
          </Item.Content>
        </Item>
      )
    })

    return (
      <div>
        <h3>Your Playlists</h3>
        <Loader active={this.state.loadingPlaylists} inline='centered' />
        <Item.Group>
          { playlistsItemList }
        </Item.Group>
      </div>
    );
  }
}
