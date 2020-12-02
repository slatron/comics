import React, { useState } from 'react'
import HeaderBar from './HeaderBar/HeaderBar'
import Drawer from './Drawer/Drawer'
import Lightbox from './Lightbox/Lightbox'
import WindowShade from './WindowShade/WindowShade'
import LightboxContext from './Lightbox/LightboxContext'
import useLightboxContext from './Lightbox/LightboxContext'

import './CommonTemplate.scss'

const CommonTemplate = (props) => {
  const [drawerActive, setDrawerActive] = useState(false)
  const [shadeActive, setShadeActive] = useState(false)
  const [lightboxActive, setLightboxActive] = useState(false)
  const [lightboxContents, setLightboxContents] = useState(null)

  const handleDrawerToggle = () => {
    setDrawerActive(!drawerActive)
    setShadeActive(!drawerActive)
  };

  const handleCloseShade = () => {
    setDrawerActive(false)
    setShadeActive(false)
  };

  const handleLightboxToggle = (element, url) => {
    if (element) {
      setLightboxContents({...element, url})
      setLightboxActive(true)
    } else {
      setLightboxContents(null)
      setLightboxActive(false)
    }
  }

  return (
    <LightboxContext.Provider value={handleLightboxToggle}>
      <HeaderBar
        toggleMenu={handleDrawerToggle}
        drawerActive={drawerActive} />
      <Drawer section={props.pageName} drawerActive={drawerActive}>
        {props.drawerChildren}
      </Drawer>
      <Lightbox
        lightboxActive={lightboxActive}
        lightboxContents={lightboxContents} />
      <WindowShade
        active={shadeActive}
        closeShade={handleCloseShade} />
      <main>
        {props.children}
      </main>
    </LightboxContext.Provider>
  )
}

export default CommonTemplate
