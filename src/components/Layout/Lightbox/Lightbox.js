import React from 'react'
import './Lightbox.scss'

import {useSelector, useDispatch} from 'react-redux'
import { lightboxHide, windowshadeHide } from 'store/actions'

const Lightbox = () => {
  const lightboxObj = useSelector(state => state.lightbox)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(lightboxHide())
    dispatch(windowshadeHide())
  }

  const LBcontent = lightboxObj
    && (
      <>
        <img
          src={lightboxObj.url}
          alt={lightboxObj.title} />
      </>
    )

  return (
    <div
      className={`lightbox ${lightboxObj ? 'active' : ''}`}
      onClick={() => handleClick()}>
      {LBcontent}
    </div>
  )
}

export default Lightbox
