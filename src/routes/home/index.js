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
import USER_LIST from './user-list.gql'
import Layout from '../../components/Layout'

async function action({ client }) {
  let { data } = await client.query({
    query: USER_LIST
  })
  data = data || {
    getUserList: [
      {
        name: 'gql failed'
      }
    ]
  }
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout>
        <Home list={data.getUserList} />
      </Layout>
    )
  }
}

export default action
