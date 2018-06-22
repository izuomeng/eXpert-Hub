import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './components'
import Paper from './components/Paper'

class Resources extends React.Component {
  static propTypes = {
    client: PropTypes.shape({
      query: PropTypes.func.isRequired
    }).isRequired
  }
  render() {
    return (
      <Container>
        <Paper client={this.props.client} />
      </Container>
    )
  }
}

export default Resources
