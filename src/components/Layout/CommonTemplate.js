import React, { useState } from 'react'
import HeaderBar from 'components/HeaderBar/HeaderBar'
import Drawer from 'components/Drawer/Drawer'

const CommonTemplate = (props) => {
  let [drawerActive, setDrawerActive] = useState(false)
  const handleDrawerToggle = () => {
    setDrawerActive(!drawerActive)
  };

  return (
    <>
      <HeaderBar
        toggleMenu={handleDrawerToggle}
        drawerActive={drawerActive} />
      <Drawer section={props.pageName} drawerActive={drawerActive}>
        {props.drawerChildren}
      </Drawer>
      <div
        className={`window-shade ${drawerActive ? 'active' : ''}`}
        onClick={handleDrawerToggle} />
      <div className="main-body">
        {props.children}
      </div>
    </>
  )
}

export default CommonTemplate
