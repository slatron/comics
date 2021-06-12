import React from 'react'
import api from 'src/api/api'
import PropTypes from 'prop-types'

import {useDispatch} from 'react-redux'
import {lightboxShow, windowshadeShow} from 'store/actions'

const CharacterLinks = ({label, names, urls}) => {
  const simplePlural = (string, n) => n > 1 ? `${string}s`: string
  const dispatch = useDispatch()

  const getId = (url) => {
    const segs = url.split('/')
    return segs[segs.length - 1]
  }

  const handleCharacterClick = (url) => {
    api.getCharacter(getId(url))
    .then(response => response.json())
    .then(response => {
      if (response.data.results?.length) {
        dispatch(lightboxShow({
          ...response.data.results[0],
          ...{
            type: 'details-character'
          }
        }))
        dispatch(windowshadeShow())
        }
    })
  }

  if (!names.length) return null

  return (
    <div className="detail-entry">
      <h6>{simplePlural(label, names.length)}</h6>
      <p className="hand" onClick={() => handleCharacterClick(urls[0])}>{names[0]}</p>
    </div>
  )
}

CharacterLinks.propTypes = {
  label: PropTypes.string,
  names: PropTypes.array,
  urls: PropTypes.array
}

export default CharacterLinks