import React from 'react'
import { Form, Input, Tooltip, Icon, Select, Row, Checkbox, Button } from 'antd'
import PropTypes from 'prop-types'
import REGISTER from 'gql/home/REGISTER.gql'

const FormItem = Form.Item
const { Option } = Select

class RegistrationForm extends React.Component {
  static propTypes = {
    client: PropTypes.shape({
      mutation: PropTypes.func.isRequired
    }).isRequired,
    form: PropTypes.shape({
      validateFieldsAndScroll: PropTypes.func.isRequired,
      getFieldDecorator: PropTypes.func.isRequired
    }).isRequired
  }
  state = {
    confirmDirty: false,
    mode: 'User',
    param: null
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.info('Received values of form: ', values)
        const params = {
          name: values.username,
          email: values.email,
          phone: values.prefix + values.phone,
          idcard: values.ID_card_number
        }
        this.setState({ param: params })
        const { client } = this.props
        requestAnimationFrame(async () => {
          const { data } = await client.mutate({
            mutation: REGISTER,
            variables: {
              info_form: this.state.param
            }
          })
          console.info('result:', data)
        })
      }
    })
  }
  handleConfirmBlur = e => {
    const { value } = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
  changeMode = value => {
    this.setState({
      mode: value
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 16 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 16 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    )

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label={
            <span>
              Username
              <Tooltip title="The name used to login in">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username!',
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Confirm Password">
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!'
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="E-mail">
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
        </FormItem>
        <FormItem {...formItemLayout} label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: 'Please input your phone number!' }
            ]
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="ID card Number">
          {getFieldDecorator('ID_card_number', {
            rules: [
              { required: true, message: 'Please input your ID card number!' }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Target Identity">
          <Select
            defaultValue="User"
            style={{ width: 120 }}
            onChange={this.changeMode}
          >
            <Option value="User">User</Option>
            <Option value="Expert">Expert</Option>
          </Select>
        </FormItem>
        {this.state.mode === 'Expert' ? (
          <FormItem {...formItemLayout} label="Profession">
            {getFieldDecorator('profession', {
              rules: [{ required: true }]
            })(
              <Select
                showSearch
                style={{ width: 200 }}
                searchPlaceholder="search..."
              >
                <Option value="professor">Professor</Option>
                <Option value="associate professor">Associate Professor</Option>
                <Option value="student">Ph.D, Master or Graduate</Option>
                <Option value="engineer">Engineer</Option>
                <Option value="manager">Manager</Option>
              </Select>
            )}
          </FormItem>
        ) : null}
        {this.state.mode === 'Expert' ? (
          <FormItem {...formItemLayout} label="Institute">
            {getFieldDecorator('institute', {
              rules: [{ required: true }]
            })(<Input />)}
          </FormItem>
        ) : null}
        {this.state.mode === 'Expert' ? (
          <FormItem {...formItemLayout} label="Picture for valid certificate">
            {getFieldDecorator('institute', {
              rules: [{ required: true }]
            })(<Input />)}
          </FormItem>
        ) : null}

        <FormItem {...tailFormItemLayout}>
          <Row type="flex" justify="center">
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
              rules: [{ required: true }]
            })(
              <Checkbox>
                I have read the <a href="www.baidu.com">agreement</a>
              </Checkbox>
            )}
          </Row>
        </FormItem>
        <FormItem {...tailFormItemLayout} justify="center">
          <Row type="flex" justify="center">
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Row>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(RegistrationForm)
