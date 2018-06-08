import React from 'react'
import PropTypes from 'prop-types'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import { Card, Layout } from 'antd'

export const MyCard = styled(InjectClass(Card))`
  margin: 1em 1em 1em 1em;
  height: 100px;
`

export const Container = styled(InjectClass(Layout))`
  min-height: calc(100vh - 52px);
  background-color: #fff !important;
`

export const SiderContainer = styled(InjectClass(Layout.Sider))`
  min-height: calc(100vh - 52px);
`
export const Title = styled.h2`
  color: rgb(97, 97, 97);
  margin-top: 20px;
`

const I = ({ item, className }) => (
  <div className={className}>
    {item.key}
    <span style={{ display: 'inline-block', float: 'right' }}>
      {item.value}
    </span>
  </div>
)
I.propTypes = {
  item: PropTypes.object.isRequired
}
export const Item = styled(I)`
  padding: 16px 22px;
  border-bottom: 1px solid #e8e8e8;
`
