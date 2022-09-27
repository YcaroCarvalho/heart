import React from 'react'
import S from './Input.module.css' 

const Input = (props) => {
  return (
    <input className={S.input} type={props.type} placeholder={props.placeholder} id={props.id} name={props.name} value={props.value} onChange={props.onChange} />
  )
}

export default Input