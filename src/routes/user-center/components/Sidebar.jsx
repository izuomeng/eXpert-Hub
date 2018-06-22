import React from 'react'
import { Menu } from 'antd'
import PropTypes from 'prop-types'
import { SiderContainer } from './index'
import SidebarHeader from './SidebarHeader'

const Sidebar = ({ handleClick }) => (
  <SiderContainer>
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={['11']}
      mode="inline"
      style={{ minHeight: '100%' }}
    >
      <SidebarHeader />
      <Menu.ItemGroup title="个人中心">
        <Menu.Item key="11"> 首页 </Menu.Item>
        {/* <Menu.Item key="12"> 修改资料 </Menu.Item> */}
        <Menu.Item key="13"> 充值积分 </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="我的购买">
        <Menu.Item key="21"> 已购买资源 </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="我的发布">
        <Menu.Item key="31"> 已发布资源 </Menu.Item>
        <Menu.Item key="32"> 发布资源 </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="认证">
        <Menu.Item key="41"> 前往认证 </Menu.Item>
        <Menu.Item key="42"> 已认证 </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  </SiderContainer>
)

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Sidebar
