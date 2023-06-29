import React from 'react'

function Button(props:any) {
  return (
    <button onClick={props.onClick} onMouseEnter={props.onMouseEnter}>{props.title}</button>
  )
}

export default Button
