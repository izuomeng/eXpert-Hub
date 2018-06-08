import React from 'react'
// import PropTypes from 'prop-types'
import { Menu, Layout } from 'antd'
import SidebarHeader from './components/SidebarHeader'
import { SiderContainer, Container } from './components'
import Home from './components/Home'

const { Content } = Layout

class UserCenter extends React.Component {
  /* static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.number
      })
    ).isRequired
  } */
  state = {
    current: '11'
  }
  handleClick = e => {
    this.setState(
      {
        current: e.key
      },
      () => console.info(this.state.current)
    )
  }
  render() {
    const { current } = this.state
    return (
      <Container>
        <SiderContainer>
          <Menu
            onClick={this.handleClick}
            // style={{ width: 256 }}
            defaultSelectedKeys={['11']}
            mode="inline"
            style={{ minHeight: '100%' }}
          >
            <SidebarHeader />
            <Menu.ItemGroup title="个人中心">
              <Menu.Item key="11"> 首页 </Menu.Item>
              <Menu.Item key="12"> 修改资料 </Menu.Item>
              <Menu.Item key="13"> 充值积分 </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="我的购买">
              <Menu.Item key="21"> 已购买资源 </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="我的发布">
              <Menu.Item key="31"> 已发布资源 </Menu.Item>
              <Menu.Item key="32"> 发布资源 </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </SiderContainer>
        <Content style={{ padding: '20px' }}>
          {current === '11' && <Home />}
        </Content>
      </Container>
    )
  }
}

export default UserCenter
