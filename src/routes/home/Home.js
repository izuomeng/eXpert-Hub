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
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import Search from 'components/Search'

const StyledList = styled(InjectClass(List))`
  max-width: 500px;
  margin: 50px auto !important;
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
      <React.Fragment>
        <Search />
        <StyledList
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={item => <List.Item>{item.name}</List.Item>}
        />
      </React.Fragment>
    )
  }
}

export default Home
