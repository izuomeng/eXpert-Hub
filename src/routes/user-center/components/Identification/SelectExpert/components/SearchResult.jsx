import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { graphql } from 'react-apollo'
import SEARCH_EXPERT from 'gql/user-center/SEARCH_EXPERT.gql'
import ResultList from './ResultList'

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

class ExpertList extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      experts: PropTypes.arrayOf(
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
      loading: PropTypes.bool.isRequired
    }),
    onSelect: PropTypes.func.isRequired
  }
  static defaultProps = {
    data: {
      experts: [],
      loading: true
    }
  }

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(eid) {
    this.props.onSelect(eid)
  }

  render() {
    const { loading, experts } = this.props.data
    // DEBUG
    console.info('Retrieved scholars: ', experts)
    return (
      <div>
        <Spin spinning={loading}>
          {!loading && <ResultList onSelect={this.onChange} data={fakeData} />}
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
