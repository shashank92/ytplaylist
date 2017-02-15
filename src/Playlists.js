import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default class Playlists extends React.Component {
  state = {
    playlists: [],
    loadingPlaylists: false
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
    return (
      <div>
        <h3>Your Playlists</h3>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
              <Card.Header>
                Steve Sanders
              </Card.Header>
              <Card.Meta>
                Friends of Elliot
              </Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Approve</Button>
                <Button basic color='red'>Decline</Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar2/large/molly.png' />
              <Card.Header>
                Molly Thomas
              </Card.Header>
              <Card.Meta>
                New User
              </Card.Meta>
              <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Approve</Button>
                <Button basic color='red'>Decline</Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/jenny.jpg' />
              <Card.Header>
                Jenny Lawrence
              </Card.Header>
              <Card.Meta>
                New User
              </Card.Meta>
              <Card.Description>
                Jenny requested permission to view your contact details
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Approve</Button>
                <Button basic color='red'>Decline</Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
