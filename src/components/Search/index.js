import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Select, Icon } from 'antd'

const { Option } = Select

class Search extends Component {
  static propTypes = {
    type: PropTypes.string
  }
  static defaultProps = {
    type: 'resource'
  }
  render() {
    const selectBefore = (
      <Select defaultValue={this.props.type} style={{ width: 90 }}>
        <Option value="resource">资源</Option>
        <Option value="expert">专家</Option>
      </Select>
    )
    return (
      <div style={{ marginBottom: 16 }}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          addonBefore={selectBefore}
          defaultValue="mysite"
        />
      </div>
    )
  }
}

export default Search
