import React from 'react'
import { Icon } from 'antd'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import history from '../../../history'

const StyledIcon = styled(InjectClass(Icon))`
  font-size: 20px;
  margin-top: 50px;
  margin-left: 200px;
  display: inline-block;
`

const StyledDiv = styled.div`
  display: inline-block;
  font-size: 18px;
`
const Rollback = () => (
  <React.Fragment>
    <StyledIcon type="rollback" onClick={() => history.goBack()} />
    <StyledDiv>返回论文</StyledDiv>
  </React.Fragment>
)

export default Rollback
