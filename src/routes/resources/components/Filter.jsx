import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { primaryColor } from 'constants/css-mixin'

const Item = styled.div`
  ${primaryColor};
  line-height: 1.5;
  cursor: pointer;
`
function trans(num) {
  return `${(num / 10000).toFixed(2)}万`
}
const Filter = ({ list }) => (
  <Card hoverable style={{ cursor: 'default' }}>
    <p>领域</p>
    {list.map(item => (
      <Item key={item.name}>
        {item.name}（{trans(item.count)}）
      </Item>
    ))}
  </Card>
)
Filter.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Filter
