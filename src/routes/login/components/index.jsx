import styled from 'styled-components'
import { InjectClass } from 'utils/HOC'
import Link from 'components/Link'
import { Form, Button } from 'antd'

export const StyledForm = styled(InjectClass(Form))`
  max-width: 300px;
  margin: 50px auto !important;
`
export const LoginButton = styled(InjectClass(Button))`
  width: 100%;
`
export const StyledLink = styled(InjectClass(Link))`
  float: right;
`
