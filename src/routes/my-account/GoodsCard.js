import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'antd'

const ImgContainer = styled.img`
  height: 110px;
  width: 90px;
  background: black;
  float: left;
  border-radius: 8px 0 0 8px;
`
const CardBorder = styled.div`
  border-radius: 8px;
  border-style: solid;
  border-color: rgb(25%, 35%, 45%, 0.3);
  border-width: 1px;
  height: 110px;
  width: 100%;
`
const DemoBox = styled.div`
  line-height: 105px;
  text-align: center;
`
const TitleContainer = styled.div`
  width: 100%;
  height: 110px;
  display: table;
  box-sizing: border-box;
`

const Title = styled.div`
  margin: 0;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`

class GoodsCard extends React.Component {
  render() {
    // const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
    return (
      <React.Fragment>
        <p>商品交易单号：xxxxxxxxxxxxxxx</p>
        <CardBorder>
          <Row type="flex" justify="center" align="top">
            <Col span={3}>
              <ImgContainer src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </Col>
            <Col span={4}>
              <TitleContainer>
                <Title>
                  这是个很长的商品名这是个很长的商品名这是个很长的商品名这是个很长的商品名
                </Title>
              </TitleContainer>
            </Col>
            <Col span={2}>
              <DemoBox>M</DemoBox>
            </Col>
            <Col span={4}>
              <TitleContainer>
                <Title>
                  <a href="/">申请售后</a>
                  <br />
                  <p />
                  <a href="/">投诉</a>
                </Title>
              </TitleContainer>
            </Col>
            <Col span={3}>
              <DemoBox>M</DemoBox>
            </Col>
            <Col span={4}>
              <TitleContainer>
                <Title>
                  <p>交易成功</p>
                  <a href="/">查看订单</a>
                </Title>
              </TitleContainer>
            </Col>
            <Col span={4}>
              <TitleContainer>
                <Title>
                  <a href="/">评价</a>
                  <br />
                  <p />
                  <a href="/">申请发票</a>
                </Title>
              </TitleContainer>
            </Col>
          </Row>
        </CardBorder>
      </React.Fragment>
    )
  }
}
export default GoodsCard
