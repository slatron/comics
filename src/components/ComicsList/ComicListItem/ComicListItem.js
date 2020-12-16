import React from 'react'
import PropTypes from 'prop-types'

import {useDispatch} from 'react-redux'
import {lightboxShow, windowshadeShow} from 'store/actions'

const ComicListItem = (props) => {
  const dispatch = useDispatch()

  const generateImgUrl = (comic) => {
    return comic.images.length
      ? `${comic.images[0].path}.${comic.images[0].extension}`
      : 'https://via.placeholder.com/150'
  }

  const handleClick = () => {
    dispatch(lightboxShow({
      ...props.comic,
      ...{
        type: 'cover-image',
        url: generateImgUrl(props.comic)
      }
    }))
    dispatch(windowshadeShow())
  }

  return (
    <li key={props.comic.id.toString()}>
      <img
        src={generateImgUrl(props.comic)}
        onClick={() => handleClick()}
        alt={props.comic.title} />
      {props.comic.title}
    </li>
  )
}

ComicListItem.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicListItem
