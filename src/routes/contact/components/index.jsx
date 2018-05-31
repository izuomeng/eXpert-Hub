import styled from 'styled-components'
import { Button } from 'antd'
import { InjectClass } from 'utils/HOC'

export const StyledButton = styled(InjectClass(Button))`
  margin: 20px;
`

export const UserInfo = styled.div`
  border: 1px solid lightskyblue;
  padding: 20px;
  margin: 50px;
  width: 200px;
  text-align: center;
  border-radius: 3px;
  display: ${props => (props.show ? 'block' : 'none')};
`
