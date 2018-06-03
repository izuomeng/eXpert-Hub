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
import { graphql } from 'react-apollo'
import { Spin } from 'antd'
import Search from 'components/Search'
import LIST from 'gql/home/LIST.gql'
import { Main, LeftContainer, RightContainer } from './components/Container'
import Card from './components/Card'

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired
        })
      ),
      loading: PropTypes.bool.isRequired
    })
  }
  static defaultProps = {
    data: {
      categories: [{ name: '' }],
      loading: true
    }
  }
  render() {
    const { categories, loading } = this.props.data
    return (
      <React.Fragment>
        <Search />
        <Spin spinning={loading}>
          <Main>
            <LeftContainer />
            <RightContainer>
              {!loading &&
                categories.map(item => (
                  <Card key={item.name} name={item.name} />
                ))}
            </RightContainer>
          </Main>
        </Spin>
      </React.Fragment>
    )
  }
}

export default graphql(LIST)(Home)
