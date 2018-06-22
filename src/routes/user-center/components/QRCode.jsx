import React from 'react'
import styled from 'styled-components'
// import { Button } from 'antd'
// import PropTypes from 'prop-types'
import QRCODE from './qrcode.png'

const Image = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${QRCODE});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
`
const QRCode = (/* { handleDone, handleCancel } */) => (
  <div>
    <Image />
    {/* <Button type="primary" onClick={handleDone}>
      购买完成
    </Button>
    <Button onClick={handleCancel}>取 消</Button> */}
  </div>
)
// QRCode.propTypes = {
//   handleDone: PropTypes.func.isRequired,
//   handleCancel: PropTypes.func.isRequired
// }

export default QRCode
