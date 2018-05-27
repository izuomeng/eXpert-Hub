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
import { Button } from 'antd'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { trans } from 'utils'
import s from './Contact.css'
import USER_LIST_QUERY from './get-user.gql'

const USER_QUERY = gql`
  query User($name: String!) {
    getUser(name: $name) {
      name
      age
      gender
    }
  }
`

const StyledButton = styled(trans(Button))`
  margin: 20px;
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
                <div>
                  {getUserList.map(user => (
                    <div key={user.name}>
                      <StyledButton
                        type="primary"
                        onClick={this.handleClick(user.name)}
                      >
                        {user.name}
                      </StyledButton>
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
