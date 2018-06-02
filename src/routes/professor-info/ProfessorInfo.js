/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import { Breadcrumb, Divider } from 'antd'
import { graphql } from 'react-apollo'
import Search from 'components/Search'
import LIST from 'gql/home/LIST.gql'
import { Container, UserImage, UserInfo } from './components/index'
import ResourceTable from './components/ResourceTable'
// import PieChart from './components/PieChart'
// import BarChart from './components/BarChart'

class ProfessorInfo extends React.Component {
  /* static propTypes = {
    data: PropTypes.shape({
      getCategoryList: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired
        })
      ),
      loading: PropTypes.bool.isRequired
    })
  } */
  render() {
    // const { getCategoryList, loading } = this.props.data
    return (
      <React.Fragment>
        <Search />
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/login">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/login">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
          <Divider />

          <UserImage>
            <img
              width="100%"
              height="100%"
              src="./main.png"
              alt="这里有用户头像"
            />
          </UserImage>
          <UserInfo>
            哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug
          </UserInfo>
          <Divider />

          <ol>this area is wating for charts</ol>
          <Divider />
          <ResourceTable />
        </Container>
      </React.Fragment>
    )
  }
}

export default graphql(LIST)(ProfessorInfo)
