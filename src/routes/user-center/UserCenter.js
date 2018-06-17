import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import PURCHASED_RESOURCE from 'gql/user-center/PURCHASED_RESOURCE.gql'
import UPLOADED_RESOURCE from 'gql/user-center/UPLOADED_RESOURCE.gql'
import { Container } from './components'
import Home from './components/Home'
import Recharge from './components/Recharge'
import ResourceList from './components/ResourceList'
import Sidebar from './components/Sidebar'
import Identification from './components/Identification'
import IdentifiedList from './components/IdentifiedList'

const { Content } = Layout

class UserCenter extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  }
  state = {
    current: '11'
  }
  async componentDidMount() {
    const { fetch } = this.props
    // 必须加上api前缀， 剩下的是后端接口路径
    const res = await fetch('/api/crud', {
      body: {
        a: 1
      }
    })
    console.info(res)
  }
  handleClick = e => {
    this.setState(
      {
        current: e.key
      },
      () => console.info(this.state.current)
    )
  }
  mapRoutes() {
    const { current } = this.state
    const { id } = this.props
    switch (current) {
      case '11':
        return <Home />
      case '13':
        return <Recharge uid={id} />
      case '21':
        return (
          <ResourceList
            variables={{ userId: id }}
            gqlTag={PURCHASED_RESOURCE}
          />
        )
      case '31':
        return (
          <ResourceList
            variables={{ ownerId: id }}
            gqlTag={UPLOADED_RESOURCE}
          />
        )
      case '41':
        return <Identification uid={id} />
      case '42':
        return <IdentifiedList variables={{ userId: id }} />
      default:
        return null
    }
  }
  render() {
    return (
      <Container>
        <Sidebar handleClick={this.handleClick} />
        <Content style={{ padding: '20px' }}>{this.mapRoutes()}</Content>
      </Container>
    )
  }
}
const mapState = state => ({
  id: state.user.id
})
export default connect(mapState, null)(UserCenter)
