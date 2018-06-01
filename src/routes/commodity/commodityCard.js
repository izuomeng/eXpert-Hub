import React from 'react'
import { Card, Button } from 'antd'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import c from './commodity.jpg'

const StyledCard = styled(InjectClass(Card))`
  width: 500px;
`
const StyledButton = styled(InjectClass(Button))`
  margin-left: 120px;
  display: inline-block;
  vertical-align: top;
`
const StyledImg = styled.div`
  width: 200px;
  display: inline-block;
  vertical-align: top;
`
const StyledCommodity = styled.div`
  font-size: 0;
  margin-left: 250px;
`

const StyledRight = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 30px;
`

class CommodityCard extends React.Component {
  render() {
    return (
      <StyledCommodity>
        <StyledImg>
          <img width="200" src={c} alt="无法加载" style={{ borderWidth: 2 }} />
        </StyledImg>
        <StyledRight>
          <StyledCard title="iMac">
            <p>评价（3）|已销售（4）</p>
            <p>价格：100元</p>
          </StyledCard>
          <div style={{ marginTop: 30 }}>
            <StyledButton>购买</StyledButton>
            <StyledButton>加入购物车</StyledButton>
          </div>
        </StyledRight>
      </StyledCommodity>
    )
  }
}

export default CommodityCard
