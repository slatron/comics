import React from 'react'
import PropTypes from 'prop-types'
import './Drawer.scss'

import {useSelector} from 'react-redux'

import {Link} from "react-router-dom"

const Drawer = ({children, section}) => {
  const drawerActive = useSelector(state => state.drawer)
  return (
    <nav
      id="drawer"
      className={`${drawerActive ? 'active' : ''}`}
    >
      <ul>
        <li className={`${section === 'mcu' ? 'active' : ''}`}>
          <Link to="/mcu-rank">MCU Rank</Link>
        </li>
        <li className={`${section === 'comics' ? 'active' : ''}`}>
          <Link to="/comics">Comics</Link>
        </li>
        <li className={`${section === 'lifetracker' ? 'active' : ''}`}>
          <Link to="/lifetracker">Lifetracker</Link>
        </li>
        <li >
          <Link to="/admin">Admin</Link>
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
