import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Layout } from 'antd'
import { connect } from 'react-redux'
import PURCHASED_RESOURCE from 'gql/user-center/PURCHASED_RESOURCE.gql'
import UPLOADED_RESOURCE from 'gql/user-center/UPLOADED_RESOURCE.gql'
import SidebarHeader from './components/SidebarHeader'
import { SiderContainer, Container } from './components'
import Home from './components/Home'
import Recharge from './components/Recharge'
import ResourceList from './components/ResourceList'

const { Content } = Layout

class UserCenter extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }
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
    const { id } = this.props
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
          {current === '13' && <Recharge uid="0001" />}
          {current === '21' && (
            <ResourceList
              variables={{ userId: id }}
              gqlTag={PURCHASED_RESOURCE}
            />
          )}
          {current === '31' && (
            <ResourceList
              variables={{ ownerId: id }}
              gqlTag={UPLOADED_RESOURCE}
            />
          )}
        </Content>
      </Container>
    )
  }
}
const mapState = state => ({
  id: state.user.id
})
export default connect(mapState, null)(UserCenter)
