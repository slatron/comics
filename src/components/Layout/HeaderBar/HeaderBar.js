import React, { useState } from 'react'
import './HeaderBar.scss'

const HeaderBar = (props) => {
  return (
    <div className="header-bar">
      <div className="flex-left vertical-align-container">
        <div
            className="hamburger"
            className={`hamburger ${props.drawerActive ? 'active' : ''}`}
            onClick={props.toggleMenu}
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
