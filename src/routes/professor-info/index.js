/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import ProfessorInfo from './ProfessorInfo'
import Layout from '../../components/Layout'

async function action() {
  return {
    title: 'Professor Info page',
    chunks: ['professor-info'],
    component: (
      <Layout>
        <ProfessorInfo />
      </Layout>
    )
  }
}

export default action
