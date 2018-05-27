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
import { List } from 'antd'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { trans } from 'utils'
import styled from 'styled-components'
import s from './Home.css'

const StyledList = styled(trans(List))`
  margin: 20px;
`

class Home extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        gender: PropTypes.number
      })
    ).isRequired
  }

  render() {
    const { list } = this.props
    return (
      <div className={s.root}>
        <div className={s.container}>
          <StyledList
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={list}
            renderItem={item => <List.Item>{item.name}</List.Item>}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Home)
