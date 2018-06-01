import React from 'react'
import Layout from '../../components/Layout'
import MyAccount from './MyAccount'

const title = 'personal orders'

function action() {
  return {
    chunks: ['my-account'],
    title,
    component: (
      <Layout>
        <MyAccount title={title} />
      </Layout>
    )
  }
}
export default action
