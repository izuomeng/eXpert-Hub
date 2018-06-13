import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Spin, Button } from 'antd'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import IDENTIFIED_LIST from 'gql/user-center/IDENTIFIED_LIST.gql'
import { Main } from './index'

const fakeData = [
  {
    name: '谭火彬',
    institution: '北京航空航天大学',
    citations: 233,
    papers: 66,
    fields: '教育学 计算机科学',
    url: 'http://www.baidu.com'
  },
  {
    name: '林广艳',
    institution: '北京航空航天大学',
    citations: 2333,
    papers: 666,
    fields: '教育学 计算机科学',
    url: 'http://www.baidu.com'
  },
  {
    name: '林广艳',
    institution: '北京航空航天大学',
    citations: 2333,
    papers: 666,
    fields: '教育学 计算机科学',
    url: 'http://www.baidu.com'
  },
  {
    name: '林广艳',
    institution: '北京航空航天大学',
    citations: 2333,
    papers: 666,
    fields: '教育学 计算机科学',
    url: 'http://www.baidu.com'
  },
  {
    name: '林广艳',
    institution: '北京航空航天大学',
    citations: 2333,
    papers: 666,
    fields: '教育学 计算机科学',
    url: 'http://www.baidu.com'
  }
]

const InfoWrapper = styled.div`
  float: left;
  min-width: 260px;
  min-height: 180px;
`

const LinkWrapper = styled.div`
  padding-top: 55px;
  float: left;
`

const I = ({
  name,
  institution,
  citations,
  papers,
  fields,
  url,
  className
}) => (
  <div className={className}>
    <InfoWrapper>
      <h2> {name} </h2>
      <p> {institution} </p>
      <p>
        <span> 被引数：{citations} </span>
        <span> 文章数：{papers} </span>
      </p>
      <p> 领域：{fields} </p>
    </InfoWrapper>
    <LinkWrapper>
      <Button href={url} icon="right" />
    </LinkWrapper>
  </div>
)

I.propTypes = {
  name: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  citations: PropTypes.string.isRequired,
  papers: PropTypes.string.isRequired,
  fields: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const Item = styled(I)`
  min-width: 360px;
  min-height: 180px;
  padding: 16px 22px;
  border-bottom: 1px solid #e8e8e8;
  // background-color: #eeeeee;
`

class IdentifiedList extends Component {
  static propTypes = {
    data: PropTypes.shape({
      scholars: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          institution: PropTypes.string.isRequired,
          citations: PropTypes.string.isRequired,
          papers: PropTypes.string.isRequired,
          fields: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      ),
      loading: PropTypes.bool.isRequired
    })
  }
  static defaultProps = {
    data: {
      resources: [{ name: '', url: '' }],
      loading: true
    }
  }
  render() {
    const { loading, scholars } = this.props.data
    console.info(scholars)
    return (
      <Main style={{ textAlign: loading ? 'center' : 'left' }}>
        <Spin spinning={loading}>
          {!loading && (
            <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={fakeData} // DEBUG
              renderItem={item => (
                <List.Item>
                  <Item
                    name={item.name}
                    institution={item.institution}
                    citations={item.citations}
                    papers={item.papers}
                    fields={item.fields}
                    url={item.url}
                  />
                </List.Item>
              )}
            />
          )}
        </Spin>
      </Main>
    )
  }
}

const WrappedUserId = props => {
  const { variables, gqlTag, ...rest } = props
  const MyList = graphql(IDENTIFIED_LIST, {
    options: { variables }
  })(IdentifiedList)
  return <MyList {...rest} />
}
WrappedUserId.propTypes = {
  variables: PropTypes.object.isRequired,
  gqlTag: PropTypes.object.isRequired
}
export default WrappedUserId
