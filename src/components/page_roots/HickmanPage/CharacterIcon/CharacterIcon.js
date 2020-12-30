import React from 'react'

const handleIconClick = (name) => {
  alert(name)
}

const CharacterIcon = (props) => {
  const {name, x, y} = props

  return (
    <>
      <g id={`logo-${name}`} onClick={() => handleIconClick(name)}>
        <circle cx={x} cy={y} r="26" stroke="#000000" fill="#bdb2bb" />
        <circle cx={x} cy={y} r="20" stroke="#2A3879" fill="#ffffff" />
        {props.children}
      </g>
    </>
  )
}

export default CharacterIcon
