import React from 'react'
import { Avatar } from 'antd'
import styled from 'styled-components'

const SidebarHeaderWrapper = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;
`

class SidebarHeader extends React.Component {
  render() {
    return (
      <SidebarHeaderWrapper>
        <Avatar
          size="large"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      </SidebarHeaderWrapper>
    )
  }
}

export default SidebarHeader
