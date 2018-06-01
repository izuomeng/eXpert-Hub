import React from 'react'
// import PropTypes from 'prop-types'
// import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import Search from 'components/Search'
import { Breadcrumb, Menu, Icon, Row, Col } from 'antd'
import GoodsCard from './GoodsCard'

const Container = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2em;
  padding-bottom: 2em;
  @media (max-width: 1000px) {
    width: 700px;
  }
`
const DemoBox = styled.div`
  text-align: center;
`
const Blank = styled.div`
  height: 1.5em;
`
class MyAccount extends React.Component {
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
  }
  handleClick = e => {
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <React.Fragment>
        <Search />
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <Icon type="home" />商城
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="user" />
              <span>个人中心</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>全部订单</Breadcrumb.Item>
          </Breadcrumb>
          <Blank />
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="all">
              <Icon type="appstore" />所有订单
            </Menu.Item>
            <Menu.Item key="pay">
              <Icon type="credit-card" />待付款
            </Menu.Item>
            <Menu.Item key="delivery">
              <Icon type="car" />待发货
            </Menu.Item>
            <Menu.Item key="comment">
              <Icon type="edit" />待评价
            </Menu.Item>
          </Menu>
          <Blank />
          <Row type="flex" justify="center" align="middle">
            <Col span={7}>
              <DemoBox>商品信息</DemoBox>
            </Col>
            <Col span={2}>
              <DemoBox>单价</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox>商品操作</DemoBox>
            </Col>
            <Col span={3}>
              <DemoBox>实付款</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox>交易状态</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox>交易操作</DemoBox>
            </Col>
          </Row>
          <Blank />
          <GoodsCard />
          <br />
          <GoodsCard />
        </Container>
      </React.Fragment>
    )
  }
}
export default MyAccount
