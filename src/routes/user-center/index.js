import React from 'react'
import Layout from '../../components/Layout'
import UserCenter from './UserCenter'

function action() {
  return {
    chunks: ['user-center'],
    title: '个人中心',
    component: (
      <Layout>
        <UserCenter />
      </Layout>
    )
  }
}
export default action
