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
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import USER_LIST_QUERY from 'gql/contact/GET_USER.gql'
import { StyledButton, UserInfo } from './components'

const USER_QUERY = gql`
  query User($name: String!) {
    getUser(name: $name) {
      name
      age
      gender
    }
  }
`

class Contact extends React.Component {
  static propTypes = {
    client: PropTypes.shape({
      query: PropTypes.func.isRequired
    }).isRequired
  }
  state = {
    currentUser: {
      name: '',
      age: ''
    },
    loading: false
  }
  handleClick = name => () => {
    const { client } = this.props
    this.setState({ loading: true })
    requestAnimationFrame(async () => {
      const { data } = await client.query({
        query: USER_QUERY,
        variables: { name }
      })
      this.setState({ currentUser: data.getUser, loading: false })
    })
  }
  render() {
    return (
      <Query query={USER_LIST_QUERY}>
        {({ data }) => {
          const { getUserList } = data
          const { currentUser, loading } = this.state
          return (
            <div>
              {loading ? (
                <div>loading.....</div>
              ) : (
                <UserInfo show={!!currentUser.name}>
                  name: {currentUser.name} <br />
                  age: {currentUser.age}
                </UserInfo>
              )}
              <div>
                {getUserList.map(user => (
                  <StyledButton
                    key={user.name}
                    type="primary"
                    onClick={this.handleClick(user.name)}
                  >
                    {user.name}
                  </StyledButton>
                ))}
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Contact
