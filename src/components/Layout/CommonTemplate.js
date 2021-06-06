import React from 'react'
import PropTypes from 'prop-types'
import HeaderBar from './HeaderBar/HeaderBar'
import Drawer from './Drawer/Drawer'
import Lightbox from './Lightbox/Lightbox'
import WindowShade from './WindowShade/WindowShade'

import './CommonTemplate.scss'

const CommonTemplate = (props) => (
  <>
    <HeaderBar />
    <Drawer section={props.pageName}>
      {props.drawerChildren}
    </Drawer>
    <Lightbox />
    <WindowShade />
    <main className={`main-content-${props.pageName}`}>
      {props.children}
    </main>
  </>
)

CommonTemplate.propTypes = {
  pageName: PropTypes.string,
  drawerChildren: PropTypes.element,
  children: PropTypes.any
}

export default CommonTemplate
