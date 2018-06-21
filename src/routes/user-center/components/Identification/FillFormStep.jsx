import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

const Container = styled.div`
  padding-top: 30px;
`

class RegistrationForm extends React.Component {
  static propTypes = {
    form: PropTypes.shape({
      validateFieldsAndScroll: PropTypes.func.isRequired,
      getFieldDecorator: PropTypes.func.isRequired
    }).isRequired
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('email')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 16 }
      }
    }
    return (
      <Container>
        <Form>
          <Form.Item {...formItemLayout} label="邮箱">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: '邮箱不合法'
                },
                {
                  required: true,
                  message: '请输入你的邮箱'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="确认邮箱">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  type: 'email',
                  message: '邮箱不合法'
                },
                {
                  required: true,
                  message: '请确认你的邮箱'
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Form>
      </Container>
    )
  }
}

export default Form.create()(RegistrationForm)
