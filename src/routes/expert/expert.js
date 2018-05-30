/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import styled from 'styled-components'
import ExpertCard from './expertCard'

const StyledRight = styled.div`
  margin-left: 500px;
  margin-top: 30px;
`

class Expert extends React.Component {
  render() {
    return (
      <div>
        <StyledRight>
          <ExpertCard />
          <ExpertCard />
          <ExpertCard />
        </StyledRight>
      </div>
    )
  }
}

export default Expert
