import React from 'react'
import { Tabs, Button } from 'antd'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'

const { TabPane } = Tabs

const StyledTabs = styled(InjectClass(Tabs))`
  width: 500px;
  margin-top: 40px;
`

const StyledReference = styled.div`
  width: 460px;
  margin-left: 20px;
`
const StyledBorder = styled.div`
  width: 500px;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
`

const StyledButton = styled(InjectClass(Button))`
  width: 200px;
  margin-left: 150px;
  margin-bottom: 20px;
  margin-top: 20px;
`

const Reference = () => (
  <StyledTabs type="card" tabBarStyle={{ marginBottom: 0 }}>
    <TabPane tab="参考文献" key="1">
      <StyledBorder>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledButton>加载更多</StyledButton>
      </StyledBorder>
    </TabPane>

    <TabPane tab="印证文献" key="2">
      <StyledBorder>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledReference>
          <p>title</p>
          <p>authors</p>
          <hr />
        </StyledReference>
        <StyledButton>加载更多</StyledButton>
      </StyledBorder>
    </TabPane>
  </StyledTabs>
)

export default Reference
