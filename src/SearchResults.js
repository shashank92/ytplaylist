import React from 'react'

import { Item } from 'semantic-ui-react'

export default class YtSearch extends React.Component {
  handleClick = (e) => {
    console.log('click event:')
    console.log(e)
  }

  render() {
    return (
      <Item.Group>
        {this.props.results.map((result) => {
          const { url, width, height } = result.thumbnail
          return (
            <Item key={result.id} onClick={this.handleClick}>
              <Item.Image width={ width } height={ height } src={ url } />

              <Item.Content>
                <Item.Header>{ result.title }</Item.Header>
                <Item.Description>{ result.description }</Item.Description>
              </Item.Content>
            </Item>
          )
        })}
      </Item.Group>
    )
  }
}
