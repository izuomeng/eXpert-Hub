/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import { Breadcrumb, Divider, BackTop } from 'antd'
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import { graphql } from 'react-apollo'
import Search from 'components/Search'
import LIST from 'gql/home/LIST.gql'
import {
  Container,
  UserImage,
  UserInfo,
  LeftTable,
  RightTable
} from './components/info'
import main from './components/main.png'
import ResourceTable from './components/ResourceTable'
// import PieChart from './components/PieChart'
// import BarChart from './components/BarChart'
const LineChartData = [
  { name: 'a', uv: 4000, pv: 2400 },
  { name: 'b', uv: 3000, pv: 1398 },
  { name: 'c', uv: 2000, pv: 1788 }
]
const RadarChartData = [
  { subject: 'Math', A: 120, fullMark: 150 },
  { subject: 'Chinese', A: 98, fullMark: 150 },
  { subject: 'English', A: 86, fullMark: 150 },
  { subject: 'Geography', A: 99, fullMark: 150 },
  { subject: 'Physics', A: 85, fullMark: 150 },
  { subject: 'History', A: 65, fullMark: 150 }
]
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
              <a href="/login">学科</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/login">研究方向</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>专家名</Breadcrumb.Item>
          </Breadcrumb>
          <Divider />

          <UserImage>
            <img width="100%" height="100%" src={main} alt="这里有用户头像" />
          </UserImage>
          <UserInfo>
            哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug哈哈哈哈哈哈哈哈哈哈哈哈有bug
          </UserInfo>
          <Divider />
          <LeftTable>
            <BarChart
              width={300}
              height={280}
              data={LineChartData}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis dataKey="pv" />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </LeftTable>
          <Divider type="vertical" />
          <RightTable>
            <RadarChart
              outerRadius={90}
              width={500}
              height={260}
              data={RadarChartData}
            >
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <PolarGrid />
              <Legend />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
            </RadarChart>
          </RightTable>
          <Divider />
          <div align="center">
            <LineChart width={600} height={250} data={LineChartData}>
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="uv" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
          <Divider />
          <ResourceTable />
          <BackTop />
        </Container>
      </React.Fragment>
    )
  }
}

export default graphql(LIST)(ProfessorInfo)
