import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import { Card, Layout } from 'antd'

// eslint-disable-next-line
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
