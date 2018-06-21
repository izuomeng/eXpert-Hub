import React from 'react'
import { Icon, List, Button, Spin, message, Modal } from 'antd'

const { confirm } = Modal
function showConfirm(data) {
  confirm({
    title: `购买该资源需要花费${data}积分，是否购买？`,
    content: '',
    onOk() {
      message.success('购买成功')
      setTimeout(
        () =>
          window.open(
            'https://reader.elsevier.com/reader/sd/91317108B0A92BAD3E4A385CC00BD822CB81290B20CC623285D07F3B565AA29713FCBCEC2B62CC1BD9EAFAF7FA3BBA13'
          ),
        2000
      )
    },
    onCancel() {
      console.log('Cancel') // eslint-disable-line
    }
  })
}

class AttachedResources extends React.Component {
  state = {
    loading: false,
    loadingMore: false,
    showLoadingMore: true,
    data: [
      {
        title:
          'Subjective Well-being in Rural India: The Curse of Conspicuous Consumption',
        name: '	Kathleen D Vohs,  Jennifer L Aaker,  Rhia Catapano',
        price: '2'
      },
      {
        title:
          'The cubic water Kuznets curve: patterns of urban water consumption and water policy effects',
        name: '	Ashwani Monga,  Ozum Zor',
        price: '5'
      },
      {
        title: 'Application of hyperthermophiles and their enzymes',
        name: 'Kimberly A .Wade-Benzoni',
        price: '2'
      },
      {
        title:
          'Trust-based distributed Kalman filtering for target tracking under malicious cyber attacks',
        name: 'Chen Liang,  Fuxi Wen,  Zhongmin Wang',
        price: '3'
      }
    ]
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
    message.info('没有更多啦')
    // this.setState({
    //   loadingMore: true
    // })
    // this.getData(res => {
    //   const data = this.state.data.concat(res.results)
    //   this.setState(
    //     {
    //       data,
    //       loadingMore: false
    //     },
    //     () => {
    //       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //       // In real scene, you can using public method of react-virtualized:
    //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //       window.dispatchEvent(new Event('resize'))
    //     }
    //   )
    // })
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
            <List.Item.Meta title={item.title} description={item.name} />
            <div style={{ marginRight: 30, lineHeight: 1 }}>
              <p>所需积分</p>
              <p style={{ fontSize: 15, marginLeft: 25 }}>{item.price}</p>
              <Icon
                type="download"
                style={{ fontSize: 20, marginLeft: 20 }}
                onClick={() => showConfirm(item.price)}
              />
            </div>
          </List.Item>
        )}
      />
    )
  }
}

export default AttachedResources
