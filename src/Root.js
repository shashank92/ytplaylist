import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import YtSearch from './YtSearch'

export default class Root extends React.Component {
  render() {
    return (
      <Grid centered columns={2} textAlign='left'>
        <Grid.Column mobile={14} tablet={7} computer={7}>
          <Segment>
            Manage Playlists
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={7} computer={7}>
          <Segment>
            <YtSearch />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
