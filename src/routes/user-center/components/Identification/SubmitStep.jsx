import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 65px;
  text-align: center;
`

class SubmitStep extends React.Component {
  render() {
    return (
      <Container>
        <h3> 管理员正在审核您的信息，请等待3-5个工作日 </h3>
      </Container>
    )
  }
}

export default SubmitStep
