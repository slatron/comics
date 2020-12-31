import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {useDispatch} from 'react-redux'
import {lightboxShow, windowshadeShow} from 'store/actions'

import ComicsListItemDetails from './ComicsListItemDetails/ComicsListItemDetails'

const ComicListItem = (props) => {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const dispatch = useDispatch()

  const generateImgUrl = (comic) => {
    return comic.images.length
      ? `${comic.images[0].path}.${comic.images[0].extension}`
      : 'https://via.placeholder.com/150'
  }

  const handleShowDetailsClick = () => {
    setDetailsOpen(!detailsOpen)
  }

  const handleImageClick = () => {
    dispatch(lightboxShow({
      ...props.comic,
      ...{
        type: 'cover-image',
        url: generateImgUrl(props.comic)
      }
    }))
    dispatch(windowshadeShow())
  }

  const stripParens = (str) => {
    return str.replace(/ *\([^)]*\) */g, ' ')
  }

  return (
    <li 
      key={props.comic.id.toString()}
      className={`${detailsOpen ? 'expanded' : ''}`}
    >
      <div className="comic-img">
        <img
          src={generateImgUrl(props.comic)}
          onClick={() => handleImageClick()}
          alt={props.comic.title} />
      </div>
      <div className="comic-details">
        <h3>{stripParens(props.comic.title)}</h3>
        {detailsOpen &&
          <ComicsListItemDetails comic={props.comic}></ComicsListItemDetails>
        }
      </div>
      <span
        className="comic-expand"
        onClick={() => handleShowDetailsClick()}
      >
        <svg x="0" y="0" viewBox="0 0 20 20">
          <path d="M 0 20 H 20 V 0 L 0 20" stroke="#000000" stroke-width="3" fill="#ff0000"/>
        </svg>
      </span>
    </li>
  )
}

ComicListItem.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicListItem
