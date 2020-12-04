import React, { useState } from 'react'
import HeaderBar from './HeaderBar/HeaderBar'
import Drawer from './Drawer/Drawer'
import Lightbox from './Lightbox/Lightbox'
import WindowShade from './WindowShade/WindowShade'

import './CommonTemplate.scss'

const CommonTemplate = (props) => {
  return (
    <>
      <HeaderBar />
      <Drawer section={props.pageName}>
        {props.drawerChildren}
      </Drawer>
      <Lightbox />
      <WindowShade />
      <main class={`main-content-${props.pageName}`}>
        {props.children}
      </main>
    </>
  )
}

export default CommonTemplate
