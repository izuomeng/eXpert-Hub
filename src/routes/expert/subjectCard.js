import React from 'react'
import { Card } from 'antd'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'

const StyledSubject = styled(InjectClass(Card))`
  width: 200px;
  margin-bottom: 20px;
`

class SubjectCard extends React.Component {
  render() {
    return (
      <StyledSubject title="工学" hoverable>
        <p>XXX XXX XXX</p>
        <p>XXX XXX XXX</p>
        <p>XXX XXX XXX</p>
      </StyledSubject>
    )
  }
}

export default SubjectCard
