import React from 'react'
import { Breadcrumb } from 'antd'

class CommodityBreadcrumb extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 180, marginTop: 120, marginBottom: 60 }}>
        <Breadcrumb separator=">>">
          <Breadcrumb.Item href="">工学</Breadcrumb.Item>
          <Breadcrumb.Item href="">计算机</Breadcrumb.Item>
          <Breadcrumb.Item>商品名</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}

export default CommodityBreadcrumb
