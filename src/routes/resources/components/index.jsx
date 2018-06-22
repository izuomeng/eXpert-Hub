import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon, Spin } from 'antd'
import styled from 'styled-components'
import { InjectClass } from 'utils/HOC'
import { primaryColor } from 'constants/css-mixin'

const { Sider, Content } = Layout

export const StyledSider = styled(InjectClass(Sider))`
  background: transparent !important;
  padding: 30px;
`
export const StyledLayout = styled(InjectClass(Layout))`
  background: transparent !important;
`
export const StyledContent = styled(InjectClass(Content))`
  padding: 30px 100px;
`
export const Container = styled.div`
  display: block;
`
export const PaperItem = styled.div`
  cursor: default;
  padding: 16px 0;
  border-bottom: 1px solid #e8e8e8;
  & > a:first-child {
    word-break: break-all;
    font-size: 1.2em;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.2s;
    color: #5a5e63;
    &:hover {
      ${primaryColor};
    }
  }
`
const PI = ({ label, value, className, icon }) => (
  <div className={className}>
    {icon && <Icon type={icon} />}
    <span style={{ width: '50px' }}>{label}: </span>
    <span style={{ marginLeft: '20px', width: '200px' }}>{value}</span>
  </div>
)
PI.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string
}
PI.defaultProps = {
  icon: ''
}
export const PaperInfo = styled(PI)`
  display: inline-block;
  margin-right: 20px;
  & > span {
    display: inline-block;
    color: #aeb0b3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > i {
    color: #aeb0b3;
    vertical-align: super;
    margin-right: 4px;
  }
`

const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`
export const Loading = () => (
  <LoadingContainer>
    <Spin />
  </LoadingContainer>
)
