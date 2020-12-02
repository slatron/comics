import React from 'react'
import './WindowShade.scss'

const WindowShade = (props) => {
  return (
    <>
      <div
        className={`window-shade ${props.active ? 'active' : ''}`}
        onClick={props.closeShade} />
    </>
  )
}

export default WindowShade
