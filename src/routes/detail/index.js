/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import Detail from './Detail'
import Layout from '../../components/Layout'

async function action({ params }) {
  return {
    title: '详情',
    chunks: ['detail'],
    component: (
      <Layout>
        <Detail params={params} />
      </Layout>
    )
  }
}

export default action
