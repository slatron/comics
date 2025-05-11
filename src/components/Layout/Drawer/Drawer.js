import React from 'react'
import PropTypes from 'prop-types'
import './Drawer.scss'

import {useSelector} from 'react-redux'

import {Link} from "react-router-dom"

const Drawer = ({children}) => {
  const drawerActive = useSelector(state => state.drawer)
  return (
    <nav
      id="drawer"
      className={`${drawerActive ? 'active' : ''}`}
    >
      <ul>
        <li>
          <Link to="/comics">Admin</Link>
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
