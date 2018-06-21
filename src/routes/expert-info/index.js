/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import ExpertInfo from './ExpertInfo'
import Layout from '../../components/Layout'

async function action() {
  return {
    title: '专家详情',
    chunks: ['expert-info'],
    component: (
      <Layout>
        <ExpertInfo />
      </Layout>
    )
  }
}

export default action
