import React from 'react'
import Layout from '../../components/Layout'
import ShoppingCart from './ShoppingCart'

const title = 'asd'

function action() {
  return {
    chunks: ['shopping-cart'],
    title,
    component: (
      <Layout>
        <ShoppingCart title={title} />
      </Layout>
    )
  }
}
export default action
