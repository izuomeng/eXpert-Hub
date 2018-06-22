/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import { graphql } from 'react-apollo'
import { Divider, BackTop } from 'antd'
import LIST from 'gql/home/LIST.gql'
// 均需要更新，链接用户id，现在都是fake id
import EXPERT_RESOURCES from 'gql/expert-info/EXPERT_RESOURCES.gql'
import SUBJECT_DISTRIBUTION from 'gql/expert-info/SUBJECT_DISTRIBUTION.gql'
import REFERENCE_DOWNLOAD from 'gql/expert-info/REFERENCE_DOWNLOAD.gql'
import EXPERT_RELATION_GRAPH from 'gql/expert-info/EXPERT_RELATION_GRAPH.gql'
import { Container, UserInfo, LeftTable, RightTable } from './components/info'
import ResourceTable from './components/ResourceTable'
import Reference from './components/Reference'
import Distribution from './components/Distribution'
import ExpertRelation from './components/ExpertRelation'

// test user-id: wating for parent page passing through the id. gql files also need rewrite
const userId = '1'

// test data: self-introduction, waiting for api
const Introdata = {
  id: { userId },
  name: '谭火彬',
  fields: [
    { name: '软件工程', url: 'https://localhost:3000/expert' },
    { name: '计算机', url: 'https://www.baidu.com' }
  ],
  intro: '无',
  resourcesCnt: 3,
  citationCnt: 50
}
// reference and download data undo, turn to ./components/Reference.jsx
// subject-distribution data undo, turn to ./components/Distribution.jsx
// resource-list data undo, turn to ./components/ResourceTable.jsx

class ProfessorInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Divider />
          <UserInfo>
            <h1>{Introdata.name}</h1>
            资源数：{Introdata.resourcesCnt}
            <Divider type="vertical" />
            被引数：{Introdata.citationCnt}
            <br />
            <br />
            <h4>
              <strong>研究领域：</strong>
              {Introdata.fields.map(field => (
                <a href={field.url}> {field.name} </a>
              ))}

              <br />
              <strong>个人简介：</strong>
              <font color="#808080">{Introdata.intro}</font>
            </h4>
          </UserInfo>
          <Divider />
          <LeftTable>
            <Reference gqlTag={REFERENCE_DOWNLOAD} />
          </LeftTable>
          <Divider type="vertical" />
          <RightTable>
            <Distribution gqlTag={SUBJECT_DISTRIBUTION} />
          </RightTable>
          <Divider />
          <div align="center">
            <h3>
              这里是专家关系网络图，从数据分析接口返回画图js代码，gql查询结构如EXPERT_RELATION_GRAPH所示
            </h3>
            <ExpertRelation gqlTag={EXPERT_RELATION_GRAPH} />
          </div>
          <Divider />
          <ResourceTable gqlTag={EXPERT_RESOURCES} />
          <BackTop />
        </Container>
      </React.Fragment>
    )
  }
}

export default graphql(LIST)(ProfessorInfo)
