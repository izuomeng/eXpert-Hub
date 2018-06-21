import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { primaryColor } from 'constants/css-mixin'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const FILTERS = gql`
  {
    fields {
      field
    }
  }
`

const Item = styled.div`
  ${primaryColor};
  line-height: 1.2;
  cursor: pointer;
  margin-bottom: 10px;
`
function trans(num) {
  return `${(num / 10000).toFixed(2)}万`
}
const Filter = ({ data: { loading, fields }, handleClick }) => (
  <Card hoverable style={{ cursor: 'default' }}>
    <p>领域</p>
    {!loading &&
      fields.map(item => (
        <Item key={item.field} onClick={() => handleClick(item.field)}>
          {item.field}（{trans(item.count)}）
        </Item>
      ))}
  </Card>
)
Filter.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default graphql(FILTERS)(Filter)
