import React from 'react'
import './loading-component.scss'

const LoadingComponent: React.FC = () => {
  return (
    <div className="loader-wrapper is-active">
      <div className="loader is-loading"></div>
    </div>
  )
}

export default LoadingComponent
