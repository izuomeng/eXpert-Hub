import React from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import SearchResult from './SearchResult'
import Container from './Container'

class SearchStep extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      institution: '',
      show: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(name, institution) {
    this.setState({ show: false })
    this.setState({ name, institution, show: true })
    // DEBUG
    // setTimeout(() => {
    //   console.info(this.state)
    // }, 1000)
  }

  render() {
    return (
      <Container>
        <h3> 请输入您的姓名和工作单位 </h3>
        <Search onSearch={this.handleSearch} />
        <SearchResult
          show={this.state.show}
          variables={{
            name: this.state.name,
            institution: this.state.institution
          }}
          onChange={this.props.onChange}
          selected={this.props.selected}
        />
      </Container>
    )
  }
}

export default SearchStep
