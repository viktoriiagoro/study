import React from 'react'
import './index.styl'

const Container = ({ wrapperClassName, className, children }) => {
  return (
    <div className={`Container ${wrapperClassName}`}>
      <div className={`content ${className}`}>{children}</div>
    </div>
  )
}

export default Container
