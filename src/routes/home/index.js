/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
// import { Query } from 'react-apollo'
import Home from './Home'
import UserList from './news.graphql'
import Layout from '../../components/Layout'

async function action({ client }) {
  let { data } = await client.query({
    query: UserList
  })
  data = data || {
    getUserList: [
      {
        name: '123'
      }
    ]
  }
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout>
        <Home news={data.getUserList} />
      </Layout>
    )
  }
}

export default action
