import React from 'react'
import AppContext from '../components/context'

export const InjectClass = MyComponent => ({ className, ...others }) => (
  <MyComponent {...others} className={className} />
)

export const WrapContext = MyComponents => {
  const WrappedWithCosumer = props => (
    <AppContext.Consumer>
      {({ context }) => <MyComponents context={context} {...props} />}
    </AppContext.Consumer>
  )
  return WrappedWithCosumer
}
