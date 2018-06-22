import React from 'react'
import styled from 'styled-components'
import TOP_SCHOLAR from 'gql/professor-list/TOP_SCHOLAR.gql'
import SelectList from './SelectExpert'
import TopScholars from './TopScholars'

const Container = styled.div`
  width: 70%;
  margin: auto;
  @media screen and (max-width: 1130px) {
    width: 1045px;
  }
`
const CardContainer = styled.div`
  margin-top: 20px;
  padding-left: 2em;
`
const ListContainer = styled.div`
  padding-left: 2em;
`
class ExpertList extends React.Component {
  constructor(props) {
    super(props)
    this.payload = {
      nickname: '',
      email: ''
    }
    this.selectRef = React.createRef()
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <CardContainer>
            <div>
              <h2>学者查询</h2>
              <SelectList ref={this.selectRef} />
            </div>
          </CardContainer>
          <ListContainer>
            <h2>热门学者</h2>
            <TopScholars gqlTag={TOP_SCHOLAR} />
          </ListContainer>
        </Container>
      </React.Fragment>
    )
  }
}
export default ExpertList
