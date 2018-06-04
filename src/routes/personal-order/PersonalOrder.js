import React from 'react'
import styled from 'styled-components'
import Search from 'components/Search'
import { Steps, Card, Col, Row, Breadcrumb, Icon } from 'antd'

/* const StyledList = styled(InjectClass(List))`
  max-width: 500px;
  margin: 50px auto !important;
` */

const StepContainer = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`

const CardContainer = styled.div`
  width: 65%;
  padding-top: 3em;
  margin-left: auto;
  margin-right: auto;
`

const TagContainer = styled.div`
  width: 70%;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
`

class PersonalOrder extends React.Component {
  render() {
    return (
      <div style={{ width: `${100}%` }}>
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
            <Breadcrumb.Item>我的订单</Breadcrumb.Item>
          </Breadcrumb>
        </TagContainer>
        <StepContainer>
          <Steps current={1}>
            <Steps.Step title="拍下商品" />
            <Steps.Step title="付款成功" />
            <Steps.Step title="卖家发货" />
            <Steps.Step title="确认收货" />
            <Steps.Step title="评价" />
          </Steps>
        </StepContainer>
        <CardContainer>
          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="订单信息" bordered={false}>
                  订单编号：xxxxxxxx <br />
                  <br />卖家联系方式：xxxxxxxxxxx
                </Card>
              </Col>
              <Col span={16}>
                <Card title="订单状态：等待发货" bordered={false}>
                  商品名：xxxxxxx <br />
                  <br /> 单价：m
                </Card>
              </Col>
            </Row>
          </div>
        </CardContainer>
      </div>
    )
  }
}

export default PersonalOrder
