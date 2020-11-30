import React from 'react'
import LightboxContext from './LightboxContext'
import './Lightbox.scss'

const Lightbox = (props) => {

  const LBcontent = props.lightboxContents
    ? (
      <p>
        <img
          src={props.lightboxContents.url}
          alt={props.lightboxContents.title} />
        {props.lightboxContents.title}
      </p>
    )
    : null

  return (
    <LightboxContext.Consumer>
      {(handleLightboxToggle) =>
        <div
          className={`lightbox ${props.lightboxActive ? 'active' : ''}`}
          onClick={() => handleLightboxToggle(null)}>
          {LBcontent}
        </div>
      }
    </LightboxContext.Consumer>
  )
}

export default Lightbox
