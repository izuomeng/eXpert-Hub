/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Register.css'

import WrappedRegistrationForm from './components/WrappedRegistrationForm'

const { Content } = Layout

class Register extends React.Component {
  static propTypes = {
    client: PropTypes.shape({
      query: PropTypes.func.isRequired
    }).isRequired
  }

  render() {
    return (
      <Layout className="layout">
        <Content>
          <div className={s.root}>
            <div className={s.container}>
              <WrappedRegistrationForm client={this.props.client} />
            </div>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default withStyles(s)(Register)
