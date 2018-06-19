import React from 'react'
import { Icon, List, Button, Spin } from 'antd'

class AttachedResources extends React.Component {
  state = {
    loading: false,
    loadingMore: false,
    showLoadingMore: true,
    data: [{ name: 'cui' }, { name: 'cui' }, { name: 'cui' }, { name: 'cui' }]
  }
  //   componentDidMount() {
  //     this.getData((res) => {
  //       this.setState({
  //         loading: false,
  //         data: res.results,
  //       });
  //     });
  //   }
  //   getData = (callback) => {
  //     reqwest({
  //       url: fakeDataUrl,
  //       type: 'json',
  //       method: 'get',
  //       contentType: 'application/json',
  //       success: (res) => {
  //         callback(res);
  //       },
  //     });
  //   }
  onLoadMore = () => {
    this.setState({
      loadingMore: true
    })
    this.getData(res => {
      const data = this.state.data.concat(res.results)
      this.setState(
        {
          data,
          loadingMore: false
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'))
        }
      )
    })
  }
  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state
    const loadMore = showLoadingMore ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px'
        }}
      >
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>加载更多</Button>}
      </div>
    ) : null
    return (
      <List
        style={{ width: 800, marginLeft: 250, marginTop: 20 }}
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://www.baidu.com/">{item.name}</a>}
              description="XXXXXXXXXXXXXXXXXXXXXXXX"
            />
            <div style={{ marginRight: 30, lineHeight: 1 }}>
              <p>所需积分</p>
              <p style={{ fontSize: 15, marginLeft: 25 }}>3</p>
              <Icon type="download" style={{ fontSize: 20, marginLeft: 20 }} />
            </div>
          </List.Item>
        )}
      />
    )
  }
}

export default AttachedResources
