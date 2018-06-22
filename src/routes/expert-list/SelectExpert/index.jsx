import React from 'react'
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import Container from '../Container'

class SearchStep extends React.Component {
  // static propTypes = {
  //   selected: PropTypes.string.isRequired
  // }
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  keyword = {
    name: '',
    institution: ''
  }

  // 提交给父组件的数据，由父组件自己获取
  selectedEid = 0

  handleSearch(name) {
    this.setState({ show: false })
    this.keyword = {
      name,
      begin: 0,
      end: 20
    }
    this.setState({ show: true })
    // DEBUG
    console.info(this.keyword)
  }

  handleSelect(eid) {
    this.selectedEid = eid
  }

  render() {
    return (
      <Container>
        <Search onSearch={this.handleSearch} />
        <SearchResult
          show={this.state.show}
          variables={this.keyword}
          onSelect={this.handleSelect}
        />
      </Container>
    )
  }
}

export default SearchStep
