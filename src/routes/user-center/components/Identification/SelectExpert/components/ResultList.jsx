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

const I = ({
  name,
  institution,
  description,
  citations,
  papers,
  fields,
  url,
  uid,
  className
}) => (
  <div className={className}>
    <InfoWrapper>
      <p>
        <a href={url}> {name} </a>
      </p>
      <p> {institution} </p>
      <p> {description} </p>
      <p>
        <span> 被引数：{citations} </span>
        <span> 文章数：{papers} </span>
      </p>
      <p> 领域：{fields} </p>
    </InfoWrapper>
    <LinkWrapper>
      <Radio value={uid} />
    </LinkWrapper>
  </div>
)

I.propTypes = {
  name: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  citations: PropTypes.number.isRequired,
  papers: PropTypes.number.isRequired,
  fields: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired
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
        name: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        citations: PropTypes.number.isRequired,
        papers: PropTypes.number.isRequired,
        fields: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        uid: PropTypes.string.isRequired
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
                name={item.name}
                institution={item.institution}
                description={item.description}
                citations={item.citations}
                papers={item.papers}
                fields={item.fields}
                url={item.url}
                uid={item.uid}
              />
            </List.Item>
          )}
        />
      </Radio.Group>
    )
  }
}

export default ResultList
