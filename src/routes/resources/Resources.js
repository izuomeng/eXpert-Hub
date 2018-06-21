import React from 'react'
import PropTypes from 'prop-types'
import Search from 'components/Search'
import gql from 'graphql-tag'
import { Container, PaperItem, StyledContent, PaperInfo } from './components'
import Paper from './components/Paper'

const RESOURCES = gql`
  query search($title: String) {
    items(title: $title) {
      title
      years
      authors
    }
  }
`

class Resources extends React.Component {
  static propTypes = {
    client: PropTypes.object.isRequired
  }
  state = {
    text: '',
    paperList: null
  }
  searchText = ''
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleSearch = async () => {
    const { data: { items } } = await this.props.client.query({
      query: RESOURCES,
      variables: {
        title: this.state.text
      }
    })
    this.setState({ paperList: items })
    console.info(this.state.text)
  }
  render() {
    const { paperList } = this.state
    return (
      <Container>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          value={this.state.text}
        />
        {!paperList && <Paper client={this.props.client} />}
        {paperList && (
          <StyledContent>
            {paperList.map(paper => (
              <PaperItem key={paper.title}>
                <a
                  style={{ display: 'block' }}
                  href={`/resources/${paper.id}?title=${paper.title}&year=${
                    paper.years
                  }&author=${toString(paper.authors)}`}
                >
                  {paper.title}
                </a>
                <PaperInfo
                  icon="user"
                  label="作者"
                  value={toString(paper.authors)}
                />
                <PaperInfo icon="calendar" label="年份" value={paper.year} />
              </PaperItem>
            ))}
          </StyledContent>
        )}
      </Container>
    )
  }
}

export default Resources
