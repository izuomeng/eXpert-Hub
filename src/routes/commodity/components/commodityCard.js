import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Spin } from 'antd'
import { graphql } from 'react-apollo'
import COMMODITY from 'gql/commodity/COMMODITY.gql'
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
  static propTypes = {
    data: PropTypes.shape({
      resources: PropTypes.arrayOf({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }),
      loading: PropTypes.bool.isRequired
    })
  }
  static defaultProps = {
    data: {
      resources: [{ name: '', price: 0 }],
      loading: true
    }
  }
  render() {
    const { resources, loading } = this.props.data
    return (
      <StyledCommodity>
        <Spin spinning={loading}>
          {!loading}
          <StyledImg>
            <img
              width="200"
              src={c}
              alt="无法加载"
              style={{ borderWidth: 2 }}
            />
          </StyledImg>
          <StyledRight>
            {!loading &&
              resources.map(item => (
                <StyledCard title={item.name}>
                  <p>评价（3）|已销售（4）</p>
                  <p>价格：{item.price}元</p>
                </StyledCard>
              ))}
            <div style={{ marginTop: 30 }}>
              <StyledButton>购买</StyledButton>
              <StyledButton>加入购物车</StyledButton>
            </div>
          </StyledRight>
        </Spin>
      </StyledCommodity>
    )
  }
}

export default graphql(COMMODITY, {
  options: { variables: { resourceId: '123' } }
})(CommodityCard)
