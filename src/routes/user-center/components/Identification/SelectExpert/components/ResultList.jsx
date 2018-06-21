import React from 'react'
import PropTypes from 'prop-types'
import { List, Radio } from 'antd'
import styled from 'styled-components'

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
      <p>
        <a href={`expert/${data.id}`}> {data.name} </a>
      </p>
      <p> {data.org} </p>
      <p>
        <span> 被引数：{data.sumCitation} </span>
        <span> 资源数: {data.sumItem} </span>
      </p>
    </InfoWrapper>
    <LinkWrapper>
      <Radio value={data.id} />
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
  }).isRequired
  // isRequired
}

class ResultList extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        org: PropTypes.string.isRequired,
        sumItem: PropTypes.number.isRequired,
        sumCitation: PropTypes.number.isRequired
      })
    ),
    onSelect: PropTypes.func.isRequired
  }
  static defaultProps = {
    data: {
      scholars: [],
      loading: true
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const eid = e.target.value
    this.setState({ selected: eid })
    this.props.onSelect(eid)
  }

  render() {
    // DEBUG
    return (
      <Radio.Group onChange={this.onChange} value={this.state.selected}>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={this.props.data}
          renderItem={item => (
            <List.Item>
              <Item data={item} />
            </List.Item>
          )}
        />
      </Radio.Group>
    )
  }
}

export default ResultList
