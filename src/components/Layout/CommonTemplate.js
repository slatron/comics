import React, { useState } from 'react'
import HeaderBar from './HeaderBar/HeaderBar'
import Drawer from './Drawer/Drawer'
import Lightbox from './Lightbox/Lightbox'
import WindowShade from './WindowShade/WindowShade'

import './CommonTemplate.scss'

const CommonTemplate = (props) => {
  const [drawerActive, setDrawerActive] = useState(false)
  const [shadeActive, setShadeActive] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerActive(!drawerActive)
    setShadeActive(!drawerActive)
  };

  const handleCloseShade = () => {
    setDrawerActive(false)
    setShadeActive(false)
  };

  return (
    <>
      <HeaderBar
        toggleMenu={handleDrawerToggle}
        drawerActive={drawerActive} />
      <Drawer section={props.pageName} drawerActive={drawerActive}>
        {props.drawerChildren}
      </Drawer>
      <Lightbox />
      <WindowShade
        active={shadeActive}
        closeShade={handleCloseShade} />
      <main class={`main-content-${props.pageName}`}>
        {props.children}
      </main>
    </>
  )
}

export default CommonTemplate
