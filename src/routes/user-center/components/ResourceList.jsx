import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Icon, Spin } from 'antd'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { Main } from './index'

const I = ({ name, url, className }) => {
  const pos = url.lastIndexOf('/')
  const filename = url.slice(pos + 1)
  return (
    <div className={className}>
      {name}
      <a
        href={url}
        download={filename}
        style={{ display: 'inline-block', float: 'right' }}
      >
        <Icon type="link" />点击下载
      </a>
    </div>
  )
}
I.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
const Item = styled(I)`
  padding: 16px 22px;
  border-bottom: 1px solid #e8e8e8;
`

class ResourceList extends Component {
  static propTypes = {
    data: PropTypes.shape({
      resources: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
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
    const { loading, resources } = this.props.data
    return (
      <Main style={{ textAlign: loading ? 'center' : 'left' }}>
        <Spin spinning={loading}>
          {!loading && (
            <List>
              {resources.map(item => (
                <Item key={item.name} name={item.name} url={item.url} />
              ))}
            </List>
          )}
        </Spin>
      </Main>
    )
  }
}
const WrappedUserId = props => {
  const { variables, gqlTag, ...rest } = props
  const MyList = graphql(gqlTag, { opitions: { variables } })(ResourceList)
  return <MyList {...rest} />
}
WrappedUserId.propTypes = {
  variables: PropTypes.object.isRequired,
  gqlTag: PropTypes.object.isRequired
}
export default WrappedUserId
