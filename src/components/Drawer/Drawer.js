import React, { useState } from 'react'
import './Drawer.scss'

const Drawer = (props) => {
  return (
    <nav
      id="drawer"
      className={`${props.drawerActive ? 'active' : ''}`}
    >
      <ul>
        <li>
          <a href="/comics.html">Comics</a>
        </li>
        <li className={`${props.section === 'mcu' ? 'active' : ''}`}>
          <a href="/mcu-rank.html">MCU Rank</a>
        </li>
      </ul>
    </nav>
  )
}

export default Drawer
