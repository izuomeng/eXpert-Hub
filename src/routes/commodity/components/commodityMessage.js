import React from 'react'
import styled from 'styled-components'
import { Menu } from 'antd'

const StyledMessage = styled.div`
  width: 830px;
  height: 300px;
  border: 1px solid grey;
  border-top: white;
`
class CommodityMessage extends React.Component {
  render() {
    return (
      <div style={{ width: 830, marginTop: 50, marginLeft: 180 }}>
        <Menu theme="light" mode="horizontal" style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">图文详情</Menu.Item>
          <Menu.Item key="2">累计评价</Menu.Item>
          <Menu.Item key="3">详细记录</Menu.Item>
        </Menu>
        <StyledMessage />
      </div>
    )
  }
}

export default CommodityMessage
