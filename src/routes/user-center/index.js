import React from 'react'
import Layout from '../../components/Layout'
import UserCenter from './UserCenter'

function action({ fetch }) {
  return {
    chunks: ['user-center'],
    title: '个人中心',
    component: (
      <Layout>
        <UserCenter fetch={fetch} />
      </Layout>
    )
  }
}
export default action
