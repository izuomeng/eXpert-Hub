import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Layout } from 'antd'
import styled from 'styled-components'
import { InjectClass } from 'utils/HOC'
import Filter from './Filter'

const { Sider, Content } = Layout
const StyledSider = styled(InjectClass(Sider))`
  background: transparent !important;
  padding: 30px;
`
const StyledLayout = styled(InjectClass(Layout))`
  background: transparent !important;
`
const StyledContent = styled(InjectClass(Content))`
  padding: 30px;
`
const list = [
  { name: 'computer', count: 120500 },
  { name: 'math', count: 32008 },
  { name: 'medical', count: 56210 },
  { name: 'history', count: 12000 },
  { name: 'physical', count: 378020 }
]
class Paper extends Component {
  render() {
    return (
      <StyledLayout>
        <StyledSider width={300}>
          <Filter list={list} />
        </StyledSider>
        <StyledContent>论文列表</StyledContent>
      </StyledLayout>
    )
  }
}

export default Paper
