import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Spin, Button } from 'antd'
import { Query } from 'react-apollo'
import SEARCH_EXPERT from 'gql/user-center/SEARCH_EXPERT.gql'
import ResultList from './ResultList'

const NextButtonWrapper = styled.div`
  text-align: center;
`

class SearchResult extends React.Component {
  static propTypes = {
    variables: PropTypes.shape({
      name: PropTypes.string,
      institution: PropTypes.string
    }).isRequired,
    onSelect: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.currentPage = 0
    this.firstLoading = true
  }

  onChange(eid) {
    this.props.onSelect(eid)
  }

  render() {
    const { variables } = this.props
    return (
      <Query
        query={SEARCH_EXPERT}
        variables={{ page: this.currentPage, ...variables }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, data, fetchMore }) => {
          if (!loading) this.firstLoading = false
          return (
            <div>
              <Spin spinning={this.firstLoading}>
                {!this.firstLoading && (
                  <ResultList onSelect={this.onChange} data={data.authors} />
                )}
              </Spin>
              <NextButtonWrapper>
                <Button
                  name="next"
                  icon="down"
                  onClick={() => {
                    this.currentPage += 1
                    return fetchMore({
                      variables: {
                        page: this.currentPage
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev
                        return Object.assign({}, prev, {
                          feed: [...prev.authors, ...fetchMoreResult.authors]
                        })
                      }
                    })
                  }}
                />
              </NextButtonWrapper>
            </div>
          )
        }}
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
