import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Search from 'components/Search'
import PropTypes from 'prop-types'
import Filter from './Filter'
import {
  StyledSider,
  StyledLayout,
  StyledContent,
  PaperItem,
  PaperInfo
} from './index'

const categoryListDefault = [
  { name: 'computer', count: 120500 },
  { name: 'math', count: 32008 },
  { name: 'medical', count: 56210 },
  { name: 'history', count: 12000 },
  { name: 'physical', count: 378020 }
]
const paperListDefault = [
  {
    title: 'System and Method for Maskless Direct Write Lithography',
    year: '2016',
    authors: [{ name: 'Ahmed M. Alluwaimi' }]
  },
  {
    title:
      'The dilemma of the Mycobacterium avium subspecies paratuberculosis infection: In pursue for effective vaccine',
    year: '2017',
    authors: [{ name: '赵钱孙李' }, { name: '周吴郑王' }]
  }
]
class Paper extends Component {
  static propTypes = {
    categoryList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        count: PropTypes.number
      })
    ),
    paperList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        authors: PropTypes.arrayOf(PropTypes.string),
        year: PropTypes.number
      })
    ),
    client: PropTypes.shape({
      query: PropTypes.func.isRequired
    }).isRequired
  }
  static defaultProps = {
    categoryList: categoryListDefault,
    paperList: paperListDefault
  }
  render() {
    console.info(this.props.paperList)
    return (
      <StyledLayout>
        <StyledSider width={300}>
          <Filter list={this.props.categoryList} />
        </StyledSider>
        <StyledContent>
          <Search client={this.props.client} />
          {this.props.paperList.map(paper => (
            <PaperItem key={paper.title}>
              <div>{paper.title}</div>
              <PaperInfo
                icon="user"
                label="作者"
                value={paper.authors.map(v => v.name).join(', ')}
              />
              <PaperInfo icon="calendar" label="年份" value={paper.year} />
            </PaperItem>
          ))}
        </StyledContent>
      </StyledLayout>
    )
  }
}

export default Paper
