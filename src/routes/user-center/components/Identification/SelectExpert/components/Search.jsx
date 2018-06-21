import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Row, Col } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
`

class ExpertSearch extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      institution: ''
    }
    this.onSearch = this.props.onSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    this.onSearch(this.state.name, this.state.institution)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col span={22}>
            <Input.Group compact>
              <Input
                name="name"
                style={{ width: '40%' }}
                placeholder="姓名"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <Input
                name="institution"
                style={{ width: '55%' }}
                placeholder="机构"
                value={this.state.institution}
                onChange={this.handleChange}
              />
            </Input.Group>
          </Col>
          <Col span={2}>
            <Button shape="circle" icon="search" onClick={this.handleClick} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ExpertSearch
