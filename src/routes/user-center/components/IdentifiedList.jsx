import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Spin, Button } from 'antd'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import EXPERT_INFO from 'gql/user-center/EXPERT_INFO.gql'
import { Main } from './index'

const InfoWrapper = styled.div`
  float: left;
  min-width: 260px;
  min-height: 180px;
`

const LinkWrapper = styled.div`
  padding-top: 55px;
  float: left;
`

const ItemWrapper = styled.div`
  min-width: 360px;
  min-height: 140px;
  padding: 16px 22px;
  border-bottom: 1px solid #e8e8e8;
  // background-color: #eeeeee;
`

const Item = ({ data }) => (
  <ItemWrapper>
    <InfoWrapper>
      <h2> {data.name} </h2>
      <p> {data.org} </p>
      <p>
        <span> 被引数：{data.sumCitation} </span>
        <span> 资源数: {data.sumItem} </span>
      </p>
    </InfoWrapper>
    <LinkWrapper>
      <Button href={`expert/${data.id}`} icon="right" />
    </LinkWrapper>
  </ItemWrapper>
)

Item.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    sumCitation: PropTypes.number.isRequired,
    sumItem: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  })
  // isRequired
}
Item.defaultProps = {
  data: {
    name: '谭火彬',
    org: '北京航空航天大学',
    sumCitation: 233,
    sumItem: 66,
    id: '1'
  }
}

const WrappedItem = props => (
  <Query query={EXPERT_INFO} variables={{ eid: props.eid }}>
    {({ loading, data }) => (
      <Spin spinning={loading}>
        {!loading && <Item data={{ ...data.authors[0] }} />}
      </Spin>
    )}
  </Query>
)
WrappedItem.propTypes = {
  eid: PropTypes.string.isRequired
}

const IdentifiedList = props => (
  <List
    grid={{ gutter: 16, column: 2 }}
    dataSource={props.data.eids}
    renderItem={eid => (
      <List.Item>
        <WrappedItem eid={eid} />
      </List.Item>
    )}
  />
)
IdentifiedList.propTypes = {
  data: PropTypes.shape({
    eids: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired
}

class WrappedList extends Component {
  state = {
    data: {
      eids: [],
      loading: true
    }
  }
  async componentDidMount() {
    await this.retrieveData()
  }
  async retrieveData() {
    const { fetch } = this.props
    // 必须加上api前缀， 剩下的是后端接口路径
    const res = await fetch('/api/map', {
      method: 'POST'
    })
    const resJson = await res.json()
    console.info(resJson)
    this.setState({
      data: {
        eids: resJson.eid ? resJson.eid : [],
        loading: false
      }
    })
    setTimeout(() => {
      console.info(this.state)
    }, 1000)
  }

  render() {
    return (
      <Main>
        <Spin spinning={this.state.data.loading}>
          {!this.state.data.loading && (
            <IdentifiedList data={this.state.data} {...this.props} />
          )}
        </Spin>
      </Main>
    )
  }
}

export default WrappedList
