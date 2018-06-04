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
import SubjectCard from './subjectCard'

const StyledRight = styled.div`
  margin-left: 100px;
  margin-top: 100px;
  display: inline-block;
  vertical-align: top;
`
const StyledLeft = styled.div`
  margin-left: 140px;
  margin-top: 50px;
  display: inline-block;
  vertical-align: top;
`

class Expert extends React.Component {
  render() {
    return (
      <div style={{ fontSize: 0 }}>
        <StyledLeft>
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </StyledLeft>
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
