import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Radio, Button } from 'antd'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import { RECHARGE_AMOUNT } from '../../../constants'
import { Title, Main } from './index'

const StyledRadio = styled(InjectClass(Radio))`
  display: block !important;
  height: 30px;
  line-height: 50px !important;
`

const Item = styled.h2`
  color: rgb(97, 97, 97);
  padding: 16px 0;
  & > span {
    color: #1890ff;
    margin-left: 20px;
  }
`
const Purchase = styled.div`
  /* text-align: center; */
  margin-top: 50px;
`

class Recharge extends Component {
  static propTypes = {
    uid: PropTypes.string.isRequired
  }
  state = {
    value: 50
  }
  onChange = e => {
    this.setState({ value: e.target.value })
    console.info(this.props.uid)
  }
  render() {
    const { value } = this.state
    return (
      <Main>
        <Title>选择套餐</Title>
        <Radio.Group onChange={this.onChange} value={value}>
          {RECHARGE_AMOUNT.map(item => (
            <StyledRadio value={item.value} key={item.value}>
              {item.label}
            </StyledRadio>
          ))}
        </Radio.Group>
        <Item>
          金额: <span>{value}元</span>
        </Item>
        <Purchase>
          <Button type="primary">购买</Button>
        </Purchase>
      </Main>
    )
  }
}

export default Recharge
