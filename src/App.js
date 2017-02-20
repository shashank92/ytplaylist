import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Playlists from './Playlists'
import YtSearch from './YtSearch'

const App = () => (
  <Grid centered textAlign='left'>
    <Grid.Row>
      <Grid.Column width={14}>
        <Segment>
          <YtSearch />
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={14}>
        <Segment>
          <Playlists />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default App
