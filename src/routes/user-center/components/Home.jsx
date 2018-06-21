import React from 'react'
import styled from 'styled-components'
import { List, Tag, Button } from 'antd'
import PropTypes from 'prop-types'
import cookies from 'js-cookie'
import { InjectClass } from 'utils/HOC'
import history from '../../../history'
import { Title, Item, Main } from './index'

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
function handleLogout() {
  cookies.remove('token')
  history.push('/login')
}

const Home = ({ info, money }) => (
  <Main>
    <Title>
      个人信息<StyledTag color="green">专家</StyledTag>
    </Title>
    <List
      size="large"
      dataSource={info}
      renderItem={item => <Item item={item} />}
    />
    <Title>积分</Title>
    <List
      size="large"
      dataSource={[money]}
      renderItem={item => (
        <Item item={{ key: '积分余额', value: item.remain }} />
      )}
    />
    <Logout>
      <Button type="danger" onClick={handleLogout}>
        退出登录
      </Button>
    </Logout>
  </Main>
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
  info: [
    { key: '用户名', value: 'zuomeng' },
    { key: '性别', value: '男' },
    { key: '邮箱', value: 'weekhimup@gmail.com' },
    { key: '手机', value: '13123210328' }
  ],
  money: {
    remain: 100
  }
}

export default Home
