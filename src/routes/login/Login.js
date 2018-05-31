/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Form, Icon, Input, Checkbox, message } from 'antd'
import history from '../../history'
import { StyledForm, StyledLink as Link, LoginButton } from './components'

const FormItem = Form.Item

class Login extends React.Component {
  static propTypes = {
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldDecorator: PropTypes.func.isRequired
    }).isRequired,
    fetch: PropTypes.func.isRequired
  }
  handleSubmit = e => {
    const { form, fetch } = this.props
    e.preventDefault()
    form.validateFields(async (err, values) => {
      if (!err) {
        const res = await fetch('/loginapi', {
          method: 'post',
          body: values
        })
        const data = await res.json()
        if (data && data.errorCode === 0) {
          message.success('登陆成功')
          return history.push('/')
        }
        // TODO: 提示失败原因
        return message.error('登陆失败')
        // console.info(res)
      }
      return false
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Link to="/login">Forgot password</Link>
          <LoginButton type="primary" htmlType="submit">
            Log in
          </LoginButton>
          Or <a href="/regiser">register now</a>
        </FormItem>
      </StyledForm>
    )
  }
}

export default Form.create()(Login)
