import React from 'react'
// import PropTypes from 'prop-types'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import { Menu, Row, Col, Layout, Card, Button } from 'antd'
import SidebarHeader from './components/SidebarHeader'

const MyCard = styled(InjectClass(Card))`
  margin: 1em 1em 1em 1em;
  height: 100px;
`

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
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      current: 'all'
    }
    console.info(this.state.current)
  }
  handleClick = e => {
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <Layout>
        <Layout.Sider>
          <Menu
            onClick={this.handleClick}
            // style={{ width: 256 }}
            defaultSelectedKeys={['11']}
            mode="inline"
          >
            <SidebarHeader />
            <Menu.ItemGroup title="个人中心">
              <Menu.Item key="1"> 首页 </Menu.Item>
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
        </Layout.Sider>
        <Layout.Content>
          <Row>
            <Col span={16}>
              <MyCard>
                <Row>
                  <Col span={12}>
                    某用户xxx <br />
                    资料完整度: 90%
                  </Col>
                  <Col span={12}> 积分: 100 </Col>
                </Row>
              </MyCard>
            </Col>
            <Col span={8}>
              <MyCard>
                <Button icon="plus" />
              </MyCard>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    )
  }
}

export default UserCenter
