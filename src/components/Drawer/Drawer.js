import React, { useState } from 'react'
import './Drawer.scss'

const Drawer = (props) => {
  return (
    <nav
      id="drawer"
      className={`${props.drawerActive ? 'active' : ''}`}
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
