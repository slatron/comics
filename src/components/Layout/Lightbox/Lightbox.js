import React from 'react'
import LBComicImage from './LBComicImage/LBComicImage'
import LBDetails from './LBDetails/LBDetails'
import LBHickman from './LBHickman/LBHickman'

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

  let LBcontent = null
  switch (lightboxObj.type) {
    case 'cover-image':
      LBcontent = <LBComicImage url={lightboxObj.url} title={lightboxObj.title} />
      break;
    case 'details-character':
    case 'details-creator':
      LBcontent = <LBDetails details={lightboxObj} />
      break;
    case 'details-hickman':
      LBcontent = <LBHickman details={lightboxObj} />
      break;
    default:
      LBcontent = <p>DEFAULT LB</p>
      break;
  }

  return (
    <div
      className={`lightbox ${lightboxObj.type ? 'active' : ''}`}
      onClick={() => handleClick()}>
      {LBcontent}
    </div>
  )
}

export default Lightbox
