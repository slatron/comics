import React from 'react'
import PropTypes from 'prop-types'
import './Drawer.scss'

import {useSelector} from 'react-redux'

const Drawer = ({children, section}) => {
  const drawerActive = useSelector(state => state.drawer)
  return (
    <nav
      id="drawer"
      className={`${drawerActive ? 'active' : ''}`}
    >
      <ul>
        <li className={`${section === 'mcu' ? 'active' : ''}`}>
          <a href="./mcu-rank.html">MCU Rank</a>
        </li>
        <li className={`${section === 'comics' ? 'active' : ''}`}>
          <a href="./comics.html">Comics</a>
        </li>
        <li className={`${section === 'lifetracker' ? 'active' : ''}`}>
          <a href="./lifetracker.html">Lifetracker</a>
        </li>
      </ul>
      {children}
    </nav>
  )
}

Drawer.propTypes = {
  children: PropTypes.any,
  section: PropTypes.string
}

export default Drawer
