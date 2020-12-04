import React from 'react'
import './Lightbox.scss'

import {useSelector, useDispatch} from 'react-redux'
import { lightboxHide } from 'store/actions'

const Lightbox = () => {
  const lightboxObj = useSelector(state => state.lightbox)
  const dispatch = useDispatch()

  const LBcontent = lightboxObj
    && (
      <p>
        <img
          src={lightboxObj.url}
          alt={lightboxObj.title} />
        {lightboxObj.title}
      </p>
    )

  return (
    <div
      className={`lightbox ${lightboxObj ? 'active' : ''}`}
      onClick={() => dispatch(lightboxHide())}>
      {LBcontent}
    </div>
  )
}

export default Lightbox
