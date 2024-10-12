import classNames from 'classnames'
import React from 'react'

export enum ButtonType {
  PRIMARY = 'is-primary',
  SECONDARY = 'is-link is-light',
  TERTIARY = 'is-light',
  ERROR = 'is-danger',
}

interface Props extends React.PropsWithChildren {
  disabled: boolean
  loading: boolean
  buttonType: ButtonType
  onClick?: (event: React.SyntheticEvent) => void
}

const ButtonComponent: React.FC<Props> = (props) => {
  const className = classNames('button', props.buttonType, {
    'is-loading': props.loading,
  })

  return (
    <button className={className} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default ButtonComponent
