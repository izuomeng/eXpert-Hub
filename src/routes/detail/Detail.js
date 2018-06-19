/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import Reference from './components/reference'
import RelatedResources from './components/relatedResources'
import ResourceCard from './components/resourceCard'
import { LeftContainer, RightContainer } from './components/container'

class Detail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LeftContainer>
          <ResourceCard />
          <Reference />
        </LeftContainer>
        <RightContainer>
          <RelatedResources />
        </RightContainer>
      </React.Fragment>
    )
  }
}
export default Detail
