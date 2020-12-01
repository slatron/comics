import React, { useState } from 'react'
import HeaderBar from './HeaderBar/HeaderBar'
import Drawer from './Drawer/Drawer'
import Lightbox from './Lightbox/Lightbox'
import LightboxContext from './Lightbox/LightboxContext'

const CommonTemplate = (props) => {
  let [drawerActive, setDrawerActive] = useState(false)
  let [lightboxActive, setLightboxActive] = useState(false)
  let [lightboxContents, setLightboxContents] = useState(null)
  const handleDrawerToggle = () => {
    setDrawerActive(!drawerActive)
  };

  const handleLightboxToggle = (element, url) => {
    if (element) {
      element.url = url
      setLightboxContents(element)
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
      <div
        className={`window-shade ${drawerActive ? 'active' : ''}`}
        onClick={handleDrawerToggle} />
      <Lightbox
        lightboxActive={lightboxActive}
        lightboxContents={lightboxContents} />
      <div className="main-body">
        {props.children}
      </div>
    </LightboxContext.Provider>
  )
}

export default CommonTemplate
