import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {useDispatch} from 'react-redux'
import {lightboxShow, windowshadeShow} from 'store/actions'

import {useEnterEffect} from '../useEnterEffect'

const CharacterIcon = ({
  name,
  x,
  y,
  children
}) => {
  const dispatch = useDispatch()
  useEnterEffect(name)
  const [isHover, setIsHover] = useState(false);

  const handleIconClick = (name) => {
    dispatch(lightboxShow({
      type: 'details-hickman',
      character: name
    }))
    dispatch(windowshadeShow())
  }

  const style = {
    r: isHover
      ? 27
      : 26,
    transition: 'r 100ms'
  }
  const triggerEnter = () => {
    setIsHover(true);
  }
  const triggerLeave = () => {
    setIsHover(false);
  }

  return (
    <g
      id={`logo-${name}`}
      onClick={() => handleIconClick(name)}
      onMouseOver={triggerEnter}
      onMouseLeave={triggerLeave}
    >
      <circle
        cx={x}
        cy={y}
        stroke="#000000"
        fill="#bdb2bb"
        style={style}
      >
      </circle>
      <circle
        cx={x}
        cy={y}
        r="20"
        stroke="#2A3879"
        fill="#ffffff"
      >
      </circle>
      {children}
    </g>
  )
}

CharacterIcon.propTypes = {
  name: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string,
  children: PropTypes.any
}

export default CharacterIcon
