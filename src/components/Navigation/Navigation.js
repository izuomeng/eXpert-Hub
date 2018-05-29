/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import { Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import history from '../../history'

class Navigation extends React.Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired
  }
  state = {
    /* eslint-disable no-restricted-globals */
    current: this.props.pathname
  }
  handleClick = e => {
    this.setState(
      {
        current: e.key
      },
      () => {
        history.push(e.key)
      }
    )
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="/">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="/about">
          <Icon type="link" />About
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navigation
