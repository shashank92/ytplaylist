import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import YtSearch from './YtSearch'

export default class Root extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column mobile={1} tablet={2} computer={2} />
        <Grid.Column mobile={14} tablet={6} computer={6}>
          <Segment>
            Manage Playlists
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={1} only='mobile' />
        <Grid.Column mobile={1} only='mobile' />
        <Grid.Column mobile={14} tablet={6} computer={6}>
          <Segment>
            <YtSearch />
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={1} tablet={2} computer={2} />
      </Grid>
    );
  }
}
