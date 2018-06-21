import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Filter from './Filter'
import {
  StyledSider,
  StyledLayout,
  StyledContent,
  PaperItem,
  PaperInfo
} from './index'

const RESOURCES = gql`
  {
    items {
      title
      years
      authors
    }
  }
`
const FIELD_RESOURCES = gql`
  query field_resource($field: String) {
    fields(field: $field) {
      field
      fielditemSet {
        item {
          title
          years
          authors
        }
      }
    }
  }
`
const categaryList = [
  { name: 'computer', count: 120500 },
  { name: 'math', count: 32008 },
  { name: 'medical', count: 56210 },
  { name: 'history', count: 12000 },
  { name: 'physical', count: 378020 }
]
const paperLists = [
  {
    id: '1',
    title: 'System and Method for Maskless Direct Write Lithography',
    year: '2016',
    authors: [{ name: 'Ahmed M. Alluwaimi' }]
  },
  {
    id: '2',
    title:
      'The dilemma of the Mycobacterium avium subspecies paratuberculosis infection: In pursue for effective vaccine',
    year: '2017',
    authors: [{ name: '赵钱孙李' }, { name: '周吴郑王' }]
  }
]
function toString(a) {
  return a.map(v => v.name).join(', ')
}
class Paper extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    client: PropTypes.shape({
      query: PropTypes.func.isRequired
    }).isRequired
  }
  state = {
    fieldList: null
  }
  handleFieldClick = async field => {
    const { client } = this.props
    const { data: { fields: { fielditemSet } } } = await client.query({
      query: FIELD_RESOURCES,
      variables: {
        field
      }
    })
    this.setState({ fieldList: fielditemSet.map(v => v.item) })
  }
  render() {
    const { data: { loading, items } } = this.props
    // eslint-disable-next-line
    const paperList =
      this.state.fieldList ||
      (!loading && typeof items !== 'undefined' && items)
    return (
      <StyledLayout>
        <StyledSider width={350}>
          <Filter handleClick={this.handleFieldClick} list={categaryList} />
        </StyledSider>
        <StyledContent>
          {!loading &&
            paperLists &&
            paperLists.map(paper => (
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
      </StyledLayout>
    )
  }
}

export default graphql(RESOURCES)(Paper)
