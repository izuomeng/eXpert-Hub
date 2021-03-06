/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { WrapContext } from 'utils/HOC'
// import Navigation from '../Navigation'
import Link from '../Link'

const SmallNav = styled.div`
  width: 100%;
  text-align: right;
  padding: 20px;
  & > a {
    margin-left: 20px;
    color: #fff;
  }
`
const Container = styled.div`
  background: #1890ff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
`

class Header extends React.Component {
  static propTypes = {
    context: PropTypes.object.isRequired
  }
  render() {
    const { cookie: { token } } = this.props.context
    return (
      <Container>
        <SmallNav>
          <Link to="/">主页</Link>
          <Link to="/expert">专家学者</Link>
          {token ? (
            <Link to="/account">个人中心</Link>
          ) : (
            <Link to="/login">登陆</Link>
          )}
        </SmallNav>
        {/* <Navigation pathname={pathname} /> */}
      </Container>
    )
  }
}

export default WrapContext(Header)
