import React from 'react'
import Layout from '../../components/Layout'
import PersonalOrder from './PersonalOrder'

const title = 'personal order'

function action() {
  return {
    chunks: ['personal-order'],
    title,
    component: (
      <Layout>
        <PersonalOrder title={title} />
      </Layout>
    )
  }
}
export default action
