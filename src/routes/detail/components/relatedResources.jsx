import React from 'react'
import { Card, Icon, Button } from 'antd'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'

const StyledCard = styled(InjectClass(Card))`
  width: 400px;
`

const Resource = styled.div`
  width: 280px;
  display: inline-block;
  margin-left: 20px;
`

const StyledButton = styled(InjectClass(Button))`
  width: 160px;
  margin-left: 92px;
  display: inline-block;
`

const RelatedResources = () => (
  <StyledCard title="相关资源" hoverable>
    <Resource>
      <p>名称：Codes</p>
      <p>时间：2017/8/19</p>
    </Resource>
    <Icon type="download" style={{ fontSize: 20 }} />
    <hr />
    <Resource>
      <p>名称：Codes</p>
      <p>时间：2017/8/19</p>
    </Resource>
    <Icon type="download" style={{ fontSize: 20 }} />
    <hr />
    <Resource>
      <p>名称：Codes</p>
      <p>时间：2017/8/19</p>
    </Resource>
    <Icon type="download" style={{ fontSize: 20 }} />
    <hr />
    <Resource>
      <p>名称：Codes</p>
      <p>时间：2017/8/19</p>
    </Resource>
    <Icon type="download" style={{ fontSize: 20 }} />
    <hr />
    <Resource>
      <p>名称：Codes</p>
      <p>时间：2017/8/19</p>
    </Resource>
    <Icon type="download" style={{ fontSize: 20 }} />
    <hr />
    <StyledButton>查看详情</StyledButton>
  </StyledCard>
)

export default RelatedResources
