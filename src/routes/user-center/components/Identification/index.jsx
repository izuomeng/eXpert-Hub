import React from 'react'
import { Steps, Button, message } from 'antd'
import { Title, Main } from '../index'
import SelectExpertStep from './SelectExpert'
import FillFormStep from './FillFormStep'
import SubmitStep from './SubmitStep'

class Identification extends React.Component {
  // static propTypes = {
  //   uid: PropTypes.string.isRequired
  // }
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
    this.payload = {
      nickname: '',
      email: ''
    }
    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.selectRef = React.createRef()
    this.formRef = React.createRef()
    this.steps = [
      {
        title: '检索专家',
        content: <SelectExpertStep ref={this.selectRef} />
      },
      {
        title: '填写信息',
        content: (
          <FillFormStep onSubmit={this.handleInputEmail} ref={this.formRef} />
        )
      },
      {
        title: '提交审核',
        content: <SubmitStep />
      }
    ]
  }
  handleInputEmail(email) {
    this.payload.email = email
  }
  async submit() {
    console.info(this.payload)
    const res = await fetch('/api/grant', {
      body: JSON.stringify(this.payload),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin'
    })
    console.info(res)
    return res.ok
  }

  next() {
    // 校验
    if (this.state.current === 0) {
      // const eid = this.selectRef.current.selectedEid
      // if (eid !== 0) {
      //   this.payload.nickname = eid
      //   const current = this.state.current + 1
      //   this.setState({ current })
      // }
      this.setState({ current: 1 })
    } else if (this.state.current === 1) {
      this.formRef.current.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.payload.email = values.email
          this.submit().then(ok => {
            if (ok) {
              console.info('提交成功')
            } else {
              message.info(`提交失败`)
            }
          })
          const current = this.state.current + 1
          this.setState({ current })
        }
      })
    } else {
      const current = this.state.current + 1
      this.setState({ current })
    }
  }
  prev() {
    const current = this.state.current - 1
    this.setState({ current })
  }
  render() {
    const { Step } = Steps
    const { steps } = this
    return (
      <Main>
        <Title>认证专家</Title>
        <Steps current={this.state.current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {this.state.current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              下一步
            </Button>
          )}
          {this.state.current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('提交成功！')}
            >
              Done
            </Button>
          )}
          {this.state.current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </Main>
    )
  }
}

export default Identification
