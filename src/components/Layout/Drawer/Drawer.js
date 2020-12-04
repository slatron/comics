import React, { useState } from 'react'
import './Drawer.scss'

import {useSelector} from 'react-redux'

const Drawer = (props) => {
  const drawerActive = useSelector(state => state.drawer)
  return (
    <nav
      id="drawer"
      className={`${drawerActive ? 'active' : ''}`}
    >
      <ul>
        <li className={`${props.section === 'mcu' ? 'active' : ''}`}>
          <a href="./mcu-rank.html">MCU Rank</a>
        </li>
        <li className={`${props.section === 'comics' ? 'active' : ''}`}>
          <a href="./comics.html">Comics</a>
        </li>
      </ul>
      {props.children}
    </nav>
  )
}

export default Drawer
