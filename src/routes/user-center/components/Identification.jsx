import React from 'react'
import { Steps, Button, message } from 'antd'
import { Title, Main } from './index'
import SelectExpertStep from './Identification/SelectExpert'
import FillFormStep from './Identification/FillFormStep'
import SubmitStep from './Identification/SubmitStep'

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
      token: 0,
      expertId: 0,
      email: ''
    }
    this.handleSelectExpert = this.handleSelectExpert.bind(this)
    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.selectRef = React.createRef()
    this.formRef = React.createRef()
    this.steps = [
      {
        title: '检索专家',
        content: (
          <SelectExpertStep
            ref={this.selectRef}
            onChange={this.handleSelectExpert}
            selected={this.state.expertId}
          />
        )
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

  handleSelectExpert(eid) {
    this.payload.expertId = eid
    // DEBUG
    // setTimeout(() => {
    //   console.info('Expert selected: ', this.state.expertId)
    // }, 500)
  }
  handleInputEmail(email) {
    this.payload.email = email
  }
  submit() {
    console.info(this.payload)
  }

  next() {
    // 校验
    if (this.state.current === 0) {
      const eid = this.selectRef.current.selectedEid
      if (eid !== 0) {
        this.payload.expertId = eid
        const current = this.state.current + 1
        this.setState({ current })
      }
    } else if (this.state.current === 1) {
      this.formRef.current.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.payload.email = values.email
          this.submit()
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
              Next
            </Button>
          )}
          {this.state.current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
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
