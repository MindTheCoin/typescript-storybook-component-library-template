import {ReactNode} from 'react'

export interface Props {
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode | Array<ReactNode>
}

function Button ({children, type = 'button'}: Props) {
  return (
    <button type={type}>{children}</button>
  )
}

export default Button
