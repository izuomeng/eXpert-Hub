import React from 'react'
import PropTypes from 'prop-types'
import { List, Spin, Radio } from 'antd'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import SEARCH_EXPERT from 'gql/user-center/SEARCH_EXPERT.gql'

const fakeData = [
  {
    name: '谭火彬',
    institution: '北京航空航天大学',
    description: '火神！！！',
    citations: 233,
    papers: 66,
    fields: '教育学 计算机科学',
    url: 'http://www.baidu.com',
    uid: '111'
  },
  {
    name: '林广艳',
    institution: '北京航空航天大学',
    description: 'lalala',
    citations: 2333,
    papers: 666,
    fields: '教育学 计算机科学',
    url: 'http://www.baidu.com',
    uid: '222'
  },
  {
    name: '林广艳',
    institution: '北京航空航天大学',
    description: 'lalala',
    citations: 2333,
    papers: 666,
    fields: '教育学 计算机科学',
    url: 'http://www.baidu.com',
    uid: '333'
  }
]

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

class ExpertList extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      scholars: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          institution: PropTypes.string.isRequired,
          citations: PropTypes.string.isRequired,
          papers: PropTypes.string.isRequired,
          fields: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          uid: PropTypes.string.isRequired
        })
      ),
      loading: PropTypes.bool.isRequired
    }),
    onChange: PropTypes.func.isRequired
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
      selected: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.onChange(e.target.value)
    this.setState({ selected: e.target.value })
  }

  render() {
    const { loading, scholars } = this.props.data
    // DEBUG
    console.info('Retrieved scholars: ', scholars)
    return (
      <div>
        <Spin spinning={loading}>
          {!loading && (
            <Radio.Group onChange={this.onChange} value={this.state.selected}>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={fakeData} // DEBUG
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
          )}
        </Spin>
      </div>
    )
  }
}

const SearchResult = props => {
  const { variables, ...rest } = props
  console.info('Query vars: ', variables)
  const MyList = graphql(SEARCH_EXPERT, {
    options: { variables }
  })(ExpertList)
  return <MyList {...rest} />
}

SearchResult.propTypes = {
  variables: PropTypes.object.isRequired
}

const wrapWithControl = WrappedComponent => {
  const Sub = ({ show, ...rest }) =>
    show ? <WrappedComponent {...rest} /> : <div />
  Sub.propTypes = {
    show: PropTypes.bool.isRequired
  }
  return Sub
}

export default wrapWithControl(SearchResult)
