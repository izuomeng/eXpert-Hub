import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { Query } from 'react-apollo'
import SEARCH_EXPERT from 'gql/user-center/SEARCH_EXPERT.gql'
import ResultList from './ResultList'

class SearchResult extends React.Component {
  static propTypes = {
    variables: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    onSelect: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(eid) {
    this.props.onSelect(eid)
  }

  render() {
    const { variables } = this.props
    return (
      <Query query={SEARCH_EXPERT} variables={variables}>
        {({ loading, data }) => (
          <Spin spinning={loading}>
            {!loading && (
              <ResultList onSelect={this.onChange} data={data.Authors} />
            )}
          </Spin>
        )}
      </Query>
    )
  }
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
