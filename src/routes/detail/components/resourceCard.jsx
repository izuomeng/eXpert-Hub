import React from 'react'
import PropTypes from 'prop-types'
import { Card, Tag, Button, Modal } from 'antd'
import styled from 'styled-components'
import { InjectClass } from 'utils/HOC'

const { confirm } = Modal

const StyledCard = styled(InjectClass(Card))`
  width: 500px;
  height: 300px;
`
function showConfirm() {
  confirm({
    title: '购买该资源需要花费3积分，是否购买？',
    content: '',
    onOk() {
      console.log('OK') // eslint-disable-line
    },
    onCancel() {
      console.log('Cancel') // eslint-disable-line
    }
  })
}

const StyledTag = ({ fos }) => <Tag color="#2db7f5">{fos}</Tag>

StyledTag.propTypes = {
  fos: PropTypes.string.isRequired
}

const StyledButton = styled(InjectClass(Button))`
  font-size: 18px;
  margin-left: 120px;
  width: 100px;
`

const ResourceCard = () => (
  <StyledCard title="我就是一个很长很长很长的标题" hoverable>
    <p>作者：ksfksafksfjlkassdjkfljfladsjfklsajfl,dsfsadfa,dsfsdafasd,dsfsa </p>
    <p>
      摘要：大家看好发空间里发挥发挥空间里发发动机开始发货的空间回复手机卡的恢复的时间里复活但是分开好地方反馈很舒服阿克苏了
    </p>
    <p>出版社：大傻子出版社</p>
    <Tag color="#2db7f5">密码学</Tag>
    <Tag color="#2db7f5">密码学</Tag>
    <Tag color="#2db7f5">密码学</Tag>
    <StyledButton size="large" onClick={showConfirm}>
      下载
    </StyledButton>
  </StyledCard>
)

// ResourceCard.propTypes = {
//   data: PropTypes.shape({
//     authors: PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string.isRequired
//       })
//     ),
//     fos: PropTypes.arrayOf(PropTypes.string.isRequired),
//     publisher: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     abstract: PropTypes.string.isRequired
//   })
// }
// ResourceCard.defaultProps = {
//   data: {
//     authors: [{ name: 'shuaicui' }],
//     fos: [''],
//     publisher: '',
//     title: '',
//     abstract: ''
//   }
// }
export default ResourceCard
