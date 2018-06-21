import React from 'react'
import Rollback from './components/rollback'
import AttachedResources from './components/attachedResources'

class Attached extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Rollback />
        <AttachedResources />
      </React.Fragment>
    )
  }
}

export default Attached
