import React from 'react'
import './WindowShade.scss'

import {useSelector, useDispatch} from 'react-redux'
import { windowshadeHide, drawerHide, lightboxHide } from 'store/actions'

const WindowShade = () => {
  const active = useSelector(state => state.windowshade)
  const dispatch = useDispatch()

  const closeShade = () => {
    dispatch(windowshadeHide())
    dispatch(drawerHide())
    dispatch(lightboxHide())
  }

  return (
    <div
      className={`window-shade ${active ? 'active' : ''}`}
      onClick={() => closeShade()}
    />
  )
}

export default WindowShade
