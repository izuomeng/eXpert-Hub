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
          <Form.Item {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Confirm E-mail">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please comfirm your E-mail!'
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
