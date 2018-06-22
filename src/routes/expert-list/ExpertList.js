import React from 'react'
import { Tabs, Icon, Card, Col, Row } from 'antd'
import styled from 'styled-components'
// import TOP_SCHOLAR from 'gql/professor-list/TOP_SCHOLAR.gql'
import { InjectClass } from 'utils/HOC'
// import SearchProf from './components/SearchProf'
// import TopScholars from './components/TopScholars'

const MyTabPane = styled(InjectClass(Tabs.TabPane))`
  width: 70%;
  padding-left: 7em;
  padding-top: 2em;
`
const Container = styled.div`
  @media screen and (max-width: 1130px) {
    width: 1045px;
  }
`
const CardContainer = styled.div`
  width: 55%;
  float: left;
`
const ListContainer = styled.div`
  width: 35%;
  padding-left: 4em;
  float: left;
`
class ExpertList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
    this.payload = {
      token: 0,
      expertId: 0,
      email: ''
    }
    this.selectRef = React.createRef()
    this.handleSelectExpert = this.handleSelectExpert.bind(this)
  }
  handleSelectExpert(eid) {
    this.payload.expertId = eid
    // DEBUG
    // setTimeout(() => {
    //   console.info('Expert selected: ', this.state.expertId)
    // }, 500)
  }
  clickSearch = e => {
    this.setState(
      {
        current: e.key
      },
      () => console.info(this.state.current)
    )
  }
  render() {
    return (
      <React.Fragment>
        <Tabs
          defaultActiveKey="2"
          size="large"
          tabBarStyle={{ paddingLeft: 80, width: '100%' }}
        >
          <Tabs.TabPane
            tab={
              <span style={{ paddingLeft: 45, paddingRight: 50 }}>
                <Icon type="book" />论文专利
              </span>
            }
            key="1"
          >
            Tab 1
          </Tabs.TabPane>
          <MyTabPane
            tab={
              <span
                style={{
                  paddingLeft: 45,
                  paddingRight: 50,
                  width: '100%'
                }}
              >
                <Icon type="team" />学者专家
              </span>
            }
            key="2"
          >
            <Container>
              <CardContainer>
                <div>
                  <h2>学者查询</h2>
                </div>
                <div style={{ marginTop: '3em' }}>
                  <Row gutter={8} style={{ marginTop: 5 }}>
                    <Col span={12}>
                      <Card
                        title="谭火彬"
                        extra={
                          <a href="/">
                            <Icon type="link" />More
                          </a>
                        }
                        actions={[
                          <span>
                            文章数: 30 &nbsp; &nbsp; &nbsp; &nbsp; 被引数: 30
                          </span>
                        ]}
                        style={{ width: '100%' }}
                      >
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card
                        title="谭火彬"
                        extra={
                          <a href="/">
                            <Icon type="link" />More
                          </a>
                        }
                        actions={[
                          <span>
                            文章数: 30 &nbsp; &nbsp; &nbsp; &nbsp; 被引数: 30
                          </span>
                        ]}
                        style={{ width: '100%' }}
                      >
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </CardContainer>
              <ListContainer>
                <h2>热门学者</h2>
              </ListContainer>
            </Container>
          </MyTabPane>
          <Tabs.TabPane
            tab={
              <span style={{ paddingLeft: 45, paddingRight: 50 }}>
                <Icon type="home" />个人中心
              </span>
            }
            key="3"
          >
            <h3>Tab 2</h3>
          </Tabs.TabPane>
        </Tabs>
      </React.Fragment>
    )
  }
}
export default ExpertList
