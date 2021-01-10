
import React from 'react'
import PropTypes from 'prop-types'

import {useEnterFade} from '../useEnterEffect'

const SvgText = (props) => {
  const {fontSize, x, y, textId} = props
  useEnterFade(textId)
  return (
    <>
      <text
        className={textId}
        fontFamily="Courier New"
        fontSize={fontSize} x={x} y={y}>
          {props.children}
        </text>
    </>
  )
}

SvgText.propTypes = {
  fontSize: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string,
  textId: PropTypes.string,
  children: PropTypes.any
}

export default SvgText
