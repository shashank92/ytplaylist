import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Playlists from './Playlists'
import YtSearch from './YtSearch'

const App = () => (
  <Grid centered columns={2} textAlign='left'>
    <Grid.Column mobile={14} tablet={7} computer={7}>
      <Segment>
        <Playlists />
      </Segment>
    </Grid.Column>
    <Grid.Column mobile={14} tablet={7} computer={7}>
      <Segment>
        <YtSearch />
      </Segment>
    </Grid.Column>
  </Grid>
)

export default App
