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
import { Breadcrumb, Menu } from 'antd'
import CommodityCard from './commodityCard'

const StyledMessage = styled.div`
  width: 830px;
  height: 300px;
  border: 1px solid grey;
  border-top: white;
`

class Commodity extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginLeft: 180, marginTop: 120, marginBottom: 60 }}>
          <Breadcrumb separator=">>">
            <Breadcrumb.Item href="">工学</Breadcrumb.Item>
            <Breadcrumb.Item href="">计算机</Breadcrumb.Item>
            <Breadcrumb.Item>商品名</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <CommodityCard />
        <div style={{ width: 830, marginTop: 50, marginLeft: 180 }}>
          <Menu theme="light" mode="horizontal" style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">图文详情</Menu.Item>
            <Menu.Item key="2">累计评价</Menu.Item>
            <Menu.Item key="3">详细记录</Menu.Item>
          </Menu>
          <StyledMessage />
        </div>
      </div>
    )
  }
}

export default Commodity
