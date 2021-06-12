import React from 'react'
import PropTypes from 'prop-types'
import HeaderBar from './HeaderBar/HeaderBar'
import Drawer from './Drawer/Drawer'
import Lightbox from './Lightbox/Lightbox'
import WindowShade from './WindowShade/WindowShade'

import './CommonTemplate.scss'

const CommonTemplate = ({
  pageName,
  drawerChildren,
  children
}) => (
  <>
    <HeaderBar />
    <Drawer section={pageName}>
      {drawerChildren}
    </Drawer>
    <Lightbox />
    <WindowShade />
    <main className={`main-content-${pageName}`}>
      {children}
    </main>
  </>
)

CommonTemplate.propTypes = {
  pageName: PropTypes.string,
  drawerChildren: PropTypes.element,
  children: PropTypes.any
}

export default CommonTemplate
