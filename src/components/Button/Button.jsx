import React from 'react'
import S from './Button.module.css'

const Button = (props) => {
  return (
    <button className={S.button} type={props.type}>{props.text}</button>
  )
}

export default Button