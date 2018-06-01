import React from 'react'
// import PropTypes from 'prop-types'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import Search from 'components/Search'

import { Row, Col, Button, Checkbox, Breadcrumb, Icon } from 'antd'
import GoodsCard from './GoodsCard'

/* const StyledList = styled(InjectClass(List))`
  max-width: 500px;
  margin: 50px auto !important;
` */
const RowL = styled(InjectClass(Row))`
  width: 100%;
  margin-left: auto;
  margin-right: 0px;
  float: right;
`

const TagContainer = styled.div`
  width: 70%;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1000px) {
    width: 700px;
  }
`
const CardContainer = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2em;
  padding-bottom: 2em;
  @media (max-width: 1000px) {
    width: 700px;
  }
`
const GoodsContainer = styled.div`
  border-style: solid;
  border-color: rgb(25%, 35%, 45%, 0.3);
  border-width: 1px;
  height: 110px;
  border-radius: 8px;
  width: 100%;
`
class ShoppingCart extends React.Component {
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
    this.state = {
      goodsNumber: 0,
      totalMoney: 0
    }
  }
  render() {
    return (
      <React.Fragment>
        <Search />
        <TagContainer>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <Icon type="home" />商城
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="user" />
              <span>个人中心</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>购物车</Breadcrumb.Item>
          </Breadcrumb>
        </TagContainer>
        <CardContainer>
          <Row gutter={24} type="flex" justify="space-around" align="top">
            <Col span={5}>
              <Checkbox>全选</Checkbox>
            </Col>
            <Col span={10}>
              <p>商品信息</p>
            </Col>
            <Col span={4}>
              <p>单价</p>
            </Col>
            <Col span={5}>
              <p>操作</p>
            </Col>
          </Row>
        </CardContainer>
        <CardContainer>
          <Row gutter={24} type="flex" justify="space-around" align="middle">
            <Col span={6}>
              <Checkbox onChange={this.onChange} />
            </Col>
            <Col span={18} pull={3}>
              <GoodsContainer>
                <GoodsCard />
              </GoodsContainer>
            </Col>
          </Row>
          <Row gutter={24} type="flex" justify="space-around" align="middle">
            <Col span={6}>
              <Checkbox onChange={this.onChange} />
            </Col>
            <Col span={18} pull={3}>
              <GoodsContainer>
                <GoodsCard />
              </GoodsContainer>
            </Col>
          </Row>
        </CardContainer>
        <CardContainer>
          <RowL gutter={24} type="flex" align="middle">
            <Col span={6} push={10}>
              已选 {this.state.goodsNumber} 件商品
            </Col>
            <Col span={6} push={8}>
              共 {this.state.totalMoney} 元
            </Col>
            <Col span={6} push={6}>
              <Button type="primary">支付</Button>
            </Col>
          </RowL>
        </CardContainer>
      </React.Fragment>
    )
  }
}

export default ShoppingCart
