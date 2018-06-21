import React from 'react'
import PropTypes from 'prop-types'
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip
} from 'recharts'

class Distribution extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      expertResourceDistribution: PropTypes.arrayOf(
        PropTypes.shape({
          rtype: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired
        })
      )
    })
  }
  // fake data
  static defaultProps = {
    data: {
      expertResourceDistribution: [
        { rtype: 'journal', count: 45 },
        { rtype: 'book', count: 47 },
        { rtype: 'oa', count: 37 },
        { rtype: 'ob', count: 18 },
        { rtype: 'oc', count: 45 }
      ]
    }
  }
  render() {
    const { expertResourceDistribution } = this.props.data
    // console.log(expertResourceDistribution)
    return (
      <RadarChart
        outerRadius={90}
        width={500}
        height={260}
        data={expertResourceDistribution}
      >
        <Radar
          name="专家资源类型分布图"
          dataKey="count"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Tooltip />
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="rtype" />
        <PolarRadiusAxis angle={45} domain={[0, 50]} />
      </RadarChart>
    )
  }
}

export default Distribution
