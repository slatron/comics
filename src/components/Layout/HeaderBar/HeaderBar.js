import React, { useState } from 'react'
import './HeaderBar.scss'

import {useSelector, useDispatch} from 'react-redux'
import { windowshadeShow, windowshadeHide, drawerShow, drawerHide } from 'store/actions'

const HeaderBar = () => {
  const drawerActive = useSelector(state => state.drawer)
  const dispatch = useDispatch()

  const toggleMenu = () => {
    if (drawerActive) {
      dispatch(drawerHide())
      dispatch(windowshadeHide())
    } else {
      dispatch(drawerShow())
      dispatch(windowshadeShow())
    }
  }

  return (
    <div className="header-bar">
      <div className="flex-left vertical-align-container">
        <div
            className={`hamburger ${drawerActive ? 'active' : ''}`}
            onClick={() => toggleMenu()}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className="flex-center vertical-align-container">
        <span className="logo">SLATER</span>
        <span className="logo logo2">COMICS</span>
      </div>
      <div className="flex-right vertical-align-container">
        <span>&nbsp;</span>
      </div>
    </div>
  )
}

export default HeaderBar
