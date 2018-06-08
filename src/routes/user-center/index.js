import React from 'react'
import Layout from '../../components/Layout'
import UserCenter from './UserCenter'

const title = 'user center'

function action() {
  return {
    chunks: ['user-center'],
    title,
    component: (
      <Layout>
        <UserCenter />
      </Layout>
    )
  }
}
export default action
