import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Select, Icon } from 'antd'
import styled from 'styled-components'

const { Option } = Select
const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
`

class Search extends Component {
  static propTypes = {
    type: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired
  }
  static defaultProps = {
    type: 'resource'
  }
  render() {
    const selectBefore = (
      <Select defaultValue={this.props.type} style={{ width: 90 }}>
        <Option value="resource">资源</Option>
        {/* <Option value="expert">专家</Option> */}
      </Select>
    )
    return (
      <Container>
        <Input
          prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
          addonBefore={selectBefore}
          placeholder="搜索"
          onPressEnter={this.props.handleSearch}
          value={this.props.value}
          onChange={this.props.handleChange}
          // defaultValue="mysite"
        />
      </Container>
    )
  }
}

export default Search
