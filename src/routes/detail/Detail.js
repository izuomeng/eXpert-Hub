import React from 'react'
import PropTypes from 'prop-types'
import Reference from './components/reference'
import RelatedResources from './components/relatedResources'
import ResourceCard from './components/resourceCard'
import { LeftContainer, RightContainer } from './components/container'

class Detail extends React.Component {
  render() {
    const { params, query } = this.props
    return (
      <React.Fragment>
        <LeftContainer>
          <ResourceCard query={query} params={params} />
          <Reference />
        </LeftContainer>
        <RightContainer>
          <RelatedResources />
        </RightContainer>
      </React.Fragment>
    )
  }
}
Detail.propTypes = {
  params: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired
}

export default Detail
