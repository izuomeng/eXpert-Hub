import { DatePicker } from 'antd'
import moment from 'moment'
import React from 'react'

const { RangePicker } = DatePicker

class TimePicker extends React.Component {
  onChange = (dates, dateStrings) => {
    console.info('From: ', dates[0], ', to: ', dates[1])
    console.info('From: ', dateStrings[0], ', to: ', dateStrings[1])
  }
  render() {
    return (
      <RangePicker
        ranges={{
          Today: [moment(), moment()],
          'This Month': [moment(), moment().endOf('month')]
        }}
        onChange={this.onChange}
      />
    )
  }
}

export default TimePicker
