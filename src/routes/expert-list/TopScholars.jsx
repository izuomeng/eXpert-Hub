import React from 'react'
import styled from 'styled-components'
import { Spin, Divider } from 'antd'
import PropTypes from 'prop-types'

const List = styled.div`
  border-style: solid;
  width: 100%;
  height: 500px;
  border-width: 2px;
  border-color: rgb(25, 25, 112, 0.2);
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Clause = styled.div`
  float: left;
  width: 20%;
  text-align: center;
  padding-bottom: 8px;
`
const I = ({ rank, name, referencedCount, downloadedCount, score }) => (
  <div style={{ marginLeft: 0, marginRight: 0 }}>
    <Divider />
    <Clause>{rank}</Clause>
    <Clause>{name}</Clause>
    <Clause>{referencedCount}</Clause>
    <Clause>{downloadedCount}</Clause>
    <Clause>{score}</Clause>
  </div>
)

I.propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  referencedCount: PropTypes.number.isRequired,
  downloadedCount: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
}
const Item = styled(I)`
  padding: 16px 22px;
  border-bottom: 1px solid #e8e8e8;
`
class TopScholar extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      topExpert: PropTypes.arrayOf(
        PropTypes.shape({
          rank: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          referencedCount: PropTypes.number.isRequired,
          downloadedCount: PropTypes.number.isRequired,
          score: PropTypes.number.isRequired
        })
      ),
      loading: PropTypes.bool.isRequired
    })
  }
  static defaultProps = {
    data: {
      topExpert: [
        {
          rank: 1,
          name: '谭火彬',
          referencedCount: 50,
          downloadedCount: 30,
          score: 40.04
        }
      ],
      loading: false
    }
  }

  render() {
    const { loading, topExpert } = this.props.data
    return (
      <div style={{ width: '100%' }}>
        <Spin spinning={loading}>
          {!loading && (
            <React.Fragment>
              <List>
                <div style={{ paddingTop: 8, paddingBottom: 8 }}>
                  <Clause>排名</Clause>
                  <Clause>姓名</Clause>
                  <Clause>被引数</Clause>
                  <Clause>下载量</Clause>
                  <Clause>综合得分</Clause>
                </div>
                {topExpert.map(item => (
                  <Item
                    key={item.name}
                    rank={item.rank}
                    name={item.name}
                    referencedCount={item.referencedCount}
                    downloadedCount={item.downloadedCount}
                    score={item.score}
                  />
                ))}
              </List>
            </React.Fragment>
          )}
        </Spin>
      </div>
    )
  }
}
export default TopScholar
