import React from 'react'
import PropTypes from 'prop-types'
import { Form, Select, Button, Upload, Icon, Input, message } from 'antd'

const FormItem = Form.Item
const { Option } = Select

class UserUpload extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.info('Received values of form: ', values)
      }
    })
  }
  normFile = e => {
    console.info('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }
  render() {
    console.info('FormItem: ', FormItem)
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="论文" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select the essay' }]
          })(
            <Select placeholder="Please select the essay">
              <Option value="1">Computer and Intractability</Option>
              <Option value="2">
                TCS: a computer program to estimate gene genealogies
              </Option>
              <Option value="3">Computer simulation of liquids</Option>
            </Select>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="价格">
          {getFieldDecorator('select-multiple', {
            rules: [
              {
                required: true,
                message: 'Please input the price '
              }
            ]
          })(<Input placeholder="Please input the price" />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Upload" extra="">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              message.success('上传成功')
            }}
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    )
  }
}

UserUpload.propTypes = {
  form: PropTypes.object.isRequired
}

export default Form.create()(UserUpload)
