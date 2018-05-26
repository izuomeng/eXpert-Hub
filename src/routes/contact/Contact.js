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
import styled from 'styled-components'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Contact.css'
import USER_LIST_QUERY from './getUser.graphql'

const USER_QUERY = gql`
  query User($name: String!) {
    getUser(name: $name) {
      name
      age
      gender
    }
  }
`

const UserInfo = styled.div`
  border: 1px solid lightskyblue;
  padding: 20px;
  margin: 50px;
  width: 200px;
  text-align: center;
  border-radius: 3px;
  display: ${props => (props.show ? 'block' : 'none')};
`

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
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
            <div className={s.root}>
              <UserInfo show={!!currentUser.name}>
                name: {currentUser.name} <br />
                age: {currentUser.age}
              </UserInfo>
              {loading ? <h2>loading.....</h2> : null}
              <div className={s.container}>
                <h1>{this.props.title}</h1>
                <div>
                  {getUserList.map(user => (
                    <div key={user.name}>
                      <button onClick={this.handleClick(user.name)}>
                        {user.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default withStyles(s)(Contact)
