import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Spin, Button } from 'antd'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
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

const I = ({ data, className }) => (
  <div className={className}>
    <InfoWrapper>
      <h2> {data.name} </h2>
      <p> {data.org} </p>
      <p>
        <span> 被引数：{data.sumCitation} </span>
        <span> 资源数: {data.sumItem} </span>
      </p>
    </InfoWrapper>
    <LinkWrapper>
      <Button href={`expert/{id}`} icon="right" />
    </LinkWrapper>
  </div>
)

I.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    sumCitation: PropTypes.number.isRequired,
    sumItem: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  })
  // isRequired
}
I.defaultProps = {
  data: {
    name: '谭火彬',
    org: '北京航空航天大学',
    sumCitation: 233,
    sumItem: 66,
    id: '1'
  }
}

const Item = styled(I)`
  min-width: 360px;
  min-height: 180px;
  padding: 16px 22px;
  border-bottom: 1px solid #e8e8e8;
  // background-color: #eeeeee;
`

const wrapWithLoading = WrappedComponent => {
  const Sub = props => {
    const { loading } = props.data
    return (
      <Spin spinning={loading}>
        {!loading && <WrappedComponent {...props} />}
      </Spin>
    )
  }
  Sub.propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired
    }).isRequired
  }
  return Sub
}

const ItemWithLoading = wrapWithLoading(Item)
const WrappedItem = props => {
  const { eid, ...rest } = props
  const MyItem = graphql(EXPERT_INFO, {
    options: { variables: { eid } }
  })(ItemWithLoading)
  return <MyItem {...rest} />
}
WrappedItem.propTypes = {
  eid: PropTypes.string.isRequired
}

const IdentifiedList = props => (
  <List
    grid={{ gutter: 16, column: 2 }}
    dataSource={props.data.eids} // DEBUG
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

const ListWrappedWithLoading = wrapWithLoading(IdentifiedList)

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
      method: 'GET'
    })
    console.info(res)
    this.setState({
      data: {
        eids: ['1', '2', '3'],
        loading: false
      }
    })
  }

  render() {
    return (
      <Main>
        <ListWrappedWithLoading data={this.state.data} {...this.props} />
      </Main>
    )
  }
}

export default WrappedList
