import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImgContainer = styled.img`
  height: 110px;
  width: 90px;
  background: black;
  float: left;
  border-radius: 8px 0 0 8px;
`
const CardGrid = {
  wide: {
    height: 110,
    width: `${parseFloat(50)}%`,
    paddingLeft: 20,
    paddingRight: 5,
    paddingTop: 40,
    paddingBottom: 40,
    /* background:'red', */
    textAlign: 'left',
    float: 'left'
  },
  narrow: {
    height: 110,
    paddingLeft: 30,
    paddingRight: 30,
    width: `${parseFloat(15)}%`,
    /* background:'black', */
    float: 'left',
    textAlign: 'middle',
    lineHeight: `${105}px`
  },
  right: {
    borderRadius: 8,
    width: `${parseFloat(15)}%`,
    paddingTop: 35,
    paddingBottom: 40,
    textAlign: 'right',
    float: 'left'
  }
}
class GoodsCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ImgContainer src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        <div style={CardGrid.wide}>
          <p>这是一个超长的商品名balabalabala</p>
        </div>
        <div style={CardGrid.narrow}>
          <p>M</p>
        </div>
        <div style={CardGrid.right}>
          <a href="/">购买</a>
          <br />
          <a href="/">删除</a>
        </div>
      </React.Fragment>
    )
  }
}
export default GoodsCard
