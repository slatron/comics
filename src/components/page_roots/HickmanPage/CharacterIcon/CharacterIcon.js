import React from 'react'

const handleIconClick = (name) => {
  alert(name)
}

const CharacterIcon = (props) => {
  const {name, x, y} = props

  return (
    <>
      <g id={`logo-${name}`} onClick={() => handleIconClick(name)}>
        <circle cx={x} cy={y} stroke="#000000" fill="#bdb2bb">
          <animate attributeName="r" values="26;29;26" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={x} cy={y} stroke="#2A3879" fill="#ffffff">
          <animate attributeName="r" values="20;22;20" dur="3s" repeatCount="indefinite" />
        </circle>
        {props.children}
      </g>
    </>
  )
}

export default CharacterIcon
