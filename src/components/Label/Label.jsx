import React from 'react'
import S from './Label.module.css'

const Label = (props) => {
  return (
    <label className={S.label} htmlFor={props.htmlFor} id={props.id} name={props.name}>{props.text}</label>
  )
}

export default Label