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

const I = ({ id, name, institution, sumCitation, sumItem, className }) => (
  <div className={className}>
    <InfoWrapper>
      <p>
        <a href={`expert/{id}`}> {name} </a>
      </p>
      <p> {institution} </p>
      <p>
        <span> 被引数：{sumCitation} </span>
        <span> 资源数: {sumItem} </span>
      </p>
    </InfoWrapper>
    <LinkWrapper>
      <Radio value={id} />
    </LinkWrapper>
  </div>
)

I.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  sumCitation: PropTypes.number.isRequired,
  sumItem: PropTypes.number.isRequired
}

const Item = styled(I)`
  min-width: 360px;
  min-height: 180px;
  padding: 16px 22px;
  border-bottom: 1px solid #e8e8e8;
  // background-color: #eeeeee;
`

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
              <Item
                id={item.id}
                name={item.name}
                institution={item.org}
                sumCitation={item.sumCitation}
                sumItem={item.sumItem}
              />
            </List.Item>
          )}
        />
      </Radio.Group>
    )
  }
}

export default ResultList
