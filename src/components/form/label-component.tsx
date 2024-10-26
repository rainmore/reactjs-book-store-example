import classNames from 'classnames'
import React from 'react'

interface Props extends React.PropsWithChildren {
  required: boolean
}

const LabelComponent: React.FC<Props> = (props) => {
  const className = classNames('label', {
    'is-required': true === props.required,
  })

  return <label className={className}>{props.children} {props.required && <b className='has-text-danger'>*</b>}</label>
}

export default LabelComponent
