/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

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
  params: PropTypes.string.isRequired,
  query: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  }).isRequired
}
export default Detail
