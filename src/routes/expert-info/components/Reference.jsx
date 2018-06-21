import React from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend } from 'recharts'

class Reference extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      authors: PropTypes.arrayOf(
        PropTypes.shape({
          sumCitation: PropTypes.number.isRequired
        })
      ),
      attachments: PropTypes.arrayOf(
        PropTypes.shape({
          downloadNum: PropTypes.number.isRequired
        })
      )
    })
  }
  // default fake data
  static defaultProps = {
    data: {
      authors: [{ sumCitation: 30 }],
      attachments: [{ downloadNum: 40 }]
    }
  }
  render() {
    const citation = this.props.data.authors[0].sumCitation
    const down = this.props.data.attachments[0].downloadNum
    const Ndata = [
      { name: '总引用量', count: citation },
      { name: '总下载量', count: down }
    ]
    return (
      <React.Fragment>
        <BarChart
          width={300}
          height={280}
          title="专家资源总引用量-总下载量图"
          data={Ndata}
          layout="horizontal"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar
            dataKey="count"
            fill="#82ca9d"
            isAnimationActive={false}
            barSize={50}
          />
        </BarChart>
      </React.Fragment>
    )
  }
}

export default Reference
