import React from 'react'
import styled from 'styled-components'
import { List, Tag, Button } from 'antd'
import PropTypes from 'prop-types'
import { InjectClass } from 'utils/HOC'

const Title = styled.h2`
  color: rgb(97, 97, 97);
  margin-top: 20px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
`

const Item = ({ item, className }) => (
  <div className={className}>
    {item.key}
    <span style={{ display: 'inline-block', float: 'right' }}>
      {item.value}
    </span>
  </div>
)
Item.propTypes = {
  item: PropTypes.object.isRequired
}

const StyledItem = styled(Item)`
  padding: 16px 22px;
  border-bottom: 1px solid #e8e8e8;
`

const StyledTag = styled(InjectClass(Tag))`
  vertical-align: 3px;
  margin-left: 5px !important;
`
const Logout = styled.div`
  text-align: center;
  margin-top: 50px;
  & > button {
    min-width: 200px;
  }
`

const Home = ({ info, money }) => (
  <Container>
    <Title>
      个人信息<StyledTag color="green">专家</StyledTag>
    </Title>
    <List
      size="large"
      dataSource={info}
      renderItem={item => <StyledItem item={item} />}
    />
    <Title>积分</Title>
    <List
      size="large"
      dataSource={[money]}
      renderItem={item => (
        <StyledItem item={{ key: '积分余额', value: item.remain }} />
      )}
    />
    <Logout>
      <Button type="danger">退出登录</Button>
    </Logout>
  </Container>
)
Home.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  money: PropTypes.shape({
    remain: PropTypes.number.isRequired
  })
}
Home.defaultProps = {
  info: [{ key: '用户名', value: 'zuomeng' }, { key: '性别', value: '男' }],
  money: {
    remain: 100
  }
}

export default Home
