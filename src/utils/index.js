import React from 'react'

export const trans = MyComponent => ({ className, ...others }) => (
  <MyComponent {...others} className={className} />
)

export const place = null
