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
  padding: 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  & > a {
    margin-left: 20px;
  }
`
const Container = styled.div`
  padding-top: 20px;
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
          {token ? <Link to="/">个人中心</Link> : <Link to="/login">登陆</Link>}
          <Link to="/">购物车</Link>
          <Link to="/">主页</Link>
          <Link to="/expert">专家</Link>
        </SmallNav>
        {/* <Navigation pathname={pathname} /> */}
      </Container>
    )
  }
}

export default WrapContext(Header)
