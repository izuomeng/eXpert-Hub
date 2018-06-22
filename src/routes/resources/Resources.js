import React from 'react'
import PropTypes from 'prop-types'
import Search from 'components/Search'
import gql from 'graphql-tag'
import InfiniteScroll from 'react-infinite-scroller'
import {
  Container,
  PaperItem,
  StyledContent,
  PaperInfo,
  Loading
} from './components'
import Paper from './components/Paper'

const RESOURCES = gql`
  query search($title: String, $begin: Int, $end: Int) {
    Items(q: $title, begin: $begin, end: $end) {
      title
      year
      authors {
        name
      }
    }
  }
`

class Resources extends React.Component {
  static propTypes = {
    client: PropTypes.object.isRequired
  }
  state = {
    text: '',
    paperList: '',
    loading: true,
    hasMore: true,
    start: 21,
    feet: 20
  }
  handleInfiniteOnLoad = async () => {
    const { paperList, start, feet, text } = this.state
    const { client } = this.props
    this.setState({
      loading: true
    })
    client
      .query({
        query: RESOURCES,
        variables: {
          title: text,
          begin: start,
          end: start + feet
        }
      })
      .then(({ data }) => {
        this.setState({
          paperList: paperList.concat(data.Items),
          loading: false,
          start: start + feet
        })
      })
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleSearch = async () => {
    const { data: { Items } } = await this.props.client.query({
      query: RESOURCES,
      variables: {
        title: this.state.text,
        begin: 0,
        end: 20
      }
    })
    this.setState({ paperList: Items })
  }
  render() {
    const { paperList, loading, text } = this.state
    return (
      <Container>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          value={this.state.text}
        />
        {!paperList && !text && <Paper client={this.props.client} />}
        {paperList && (
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
          >
            <StyledContent>
              {paperList.map(paper => (
                <PaperItem key={paper.title}>
                  <a
                    style={{ display: 'block' }}
                    href={`/resources/${paper.id}?title=${paper.title}&year=${
                      paper.year
                    }&author=${toString(paper.authors)}`}
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
                    value={String(paper.year)}
                  />
                </PaperItem>
              ))}
              {loading && <Loading />}
            </StyledContent>
          </InfiniteScroll>
        )}
      </Container>
    )
  }
}

export default Resources
