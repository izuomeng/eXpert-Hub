import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { graphql } from 'react-apollo'
import SEARCH_EXPERT from 'gql/user-center/SEARCH_EXPERT.gql'
import ResultList from './ResultList'

class ExpertList extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      authors: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          org: PropTypes.string.isRequired,
          sumCitation: PropTypes.number.isRequired,
          sumItem: PropTypes.number.isRequired,
          id: PropTypes.string.isRequired
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
    const { loading, authors } = this.props.data
    // DEBUG
    console.info('Retrieved scholars: ', authors)
    return (
      <div>
        <Spin spinning={loading}>
          {!loading && <ResultList onSelect={this.onChange} data={authors} />}
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
