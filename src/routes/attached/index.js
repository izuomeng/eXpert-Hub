/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import Attached from './Attached'
import Layout from '../../components/Layout'

async function action() {
  return {
    title: '资源',
    chunks: ['attached'],
    component: (
      <Layout>
        <Attached />
      </Layout>
    )
  }
}

export default action
