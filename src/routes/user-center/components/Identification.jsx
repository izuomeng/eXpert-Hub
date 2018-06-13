import React from 'react'
import PropTypes from 'prop-types'
import { Steps, Button, message } from 'antd'
import { Title, Main } from './index'
import SearchStep from './Identification/SearchStep'
import FillInStep from './Identification/FillInStep'
import SubmitStep from './Identification/SubmitStep'

class Identification extends React.Component {
  static propTypes = {
    uid: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      expertId: '',
      email: '',
      idCard: ''
    }
    this.handleSelectExpert = this.handleSelectExpert.bind(this)
    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.steps = [
      {
        title: '检索专家',
        content: (
          <SearchStep
            onChange={this.handleSelectExpert}
            selected={this.state.expertId}
          />
        )
      },
      {
        title: '填写信息',
        content: (
          <FillInStep
            onChange={this.handleInputEmail}
            onSubmit={this.handleSubmit}
          />
        )
      },
      {
        title: '提交审核',
        content: <SubmitStep />
      }
    ]
  }

  handleSelectExpert(uid) {
    this.setState({ expertId: uid })
    // DEBUG
    // setTimeout(() => {
    //   console.info('Expert selected: ', this.state.expertId)
    // }, 500)
  }
  handleInputEmail(email, idCard) {
    this.setState({ email, idCard })
  }
  handleSubmit() {
    console.info(
      this.props.uid,
      this.state.expertId,
      this.state.email,
      this.state.idCard
    )
  }

  next() {
    const current = this.state.current + 1
    this.setState({ current })
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
