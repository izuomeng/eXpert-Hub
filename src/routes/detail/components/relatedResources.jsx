import React from 'react'
import { Card, Icon, Button, Modal, message } from 'antd'
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import history from '../../../history'

const { confirm } = Modal
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

function showConfirm() {
  confirm({
    title: '购买该资源需要花费3积分，是否购买？',
    content: '',
    onOk() {
      message.success('购买成功')
      setTimeout(
        () =>
          window.open(
            'https://reader.elsevier.com/reader/sd/91317108B0A92BAD3E4A385CC00BD822CB81290B20CC623285D07F3B565AA29713FCBCEC2B62CC1BD9EAFAF7FA3BBA13'
          ),
        2000
      )
    },
    onCancel() {
      console.log('Cancel') // eslint-disable-line
    }
  })
}

const RelatedResources = () => (
  <StyledCard title="相关资源" hoverable>
    <Resource>
      <p>
        标题：Subjective Well-being in Rural India: The Curse of Conspicuous
        Consumption.
      </p>
      <p>时间：2011</p>
    </Resource>
    <Icon type="download" style={{ fontSize: 20 }} onClick={showConfirm} />
    <hr />
    <Resource>
      <p>
        标题：The cubic water Kuznets curve: patterns of urban water consumption
        and water policy effects
      </p>
      <p>时间：2017</p>
    </Resource>
    <Icon type="download" style={{ fontSize: 20 }} onClick={showConfirm} />
    <hr />
    <Resource>
      <p>标题：Application of hyperthermophiles and their enzymes</p>
      <p>时间：2009</p>
    </Resource>
    <Icon type="download" style={{ fontSize: 20 }} onClick={showConfirm} />
    <hr />
    <StyledButton onClick={() => history.push('/attached/123')}>
      查看详情
    </StyledButton>
  </StyledCard>
)

export default RelatedResources
