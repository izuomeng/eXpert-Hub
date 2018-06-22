import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import {
  StyledLayout,
  StyledContent,
  PaperItem,
  PaperInfo,
  Loading
} from './index'

const RESOURCES = gql`
  query list($begin: Int, $end: Int) {
    Items(q: "a", begin: $begin, end: $end) {
      id
      pdf
      title
      year
      authors {
        name
      }
    }
  }
`

function toString(a) {
  return a.map(v => v.name).toString()
}

class Paper extends Component {
  static propTypes = {
    client: PropTypes.object.isRequired
  }
  static getDerivedStateFromProps(nextProp, prevState) {
    const { listData } = prevState
    if (!nextProp.data.loading && nextProp.data.Items) {
      return {
        listData: listData.concat(nextProp.data.Items),
        loading: false
      }
    }
    return null
  }
  state = {
    listData: [],
    loading: true,
    hasMore: true,
    start: 21,
    feet: 20
  }
  handleInfiniteOnLoad = async () => {
    const { listData, start, feet } = this.state
    const { client } = this.props
    this.setState({
      loading: true
    })
    client
      .query({
        query: RESOURCES,
        variables: {
          begin: start,
          end: start + feet
        }
      })
      .then(({ data }) => {
        this.setState({
          listData: listData.concat(data.Items),
          loading: false,
          start: start + feet
        })
      })
  }
  render() {
    const { listData, loading } = this.state
    return (
      <StyledLayout>
        {/* <StyledSider width={350}>
          <Filter handleClick={this.handleFieldClick} list={categaryList} />
        </StyledSider> */}
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
        >
          <StyledContent>
            {listData &&
              listData.map((paper, index) => (
                // eslint-disable-next-line
                <PaperItem key={paper.title + index}>
                  <a
                    style={{ display: 'block' }}
                    href={`/resources/${paper.id}?title=${paper.title}&year=${
                      paper.year
                    }&author=${toString(paper.authors)}&url=${paper.pdf}`}
                  >
                    {paper.title}
                  </a>
                  <PaperInfo
                    icon="user"
                    label="作者"
                    value={toString(paper.authors)}
                  />
                  <PaperInfo
                    icon="calendar"
                    label="年份"
                    value={`${paper.year}`}
                  />
                </PaperItem>
              ))}
            {loading && <Loading />}
          </StyledContent>
        </InfiniteScroll>
      </StyledLayout>
    )
  }
}

export default graphql(RESOURCES, {
  options: {
    variables: {
      begin: 0,
      end: 20
    }
  }
})(Paper)
