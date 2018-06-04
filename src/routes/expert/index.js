/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import Expert from './expert'
import Layout from '../../components/Layout'

function action() {
  return {
    chunks: ['expert'],
    component: (
      <Layout>
        <Expert />
      </Layout>
    )
  }
}

export default action
