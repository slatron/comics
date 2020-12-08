import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { lightboxShow, windowshadeShow } from 'store/actions'

const ComicListItem = (props) => {
  const lightboxObj = useSelector(state => state.lightbox)
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
    <li key={props.key}>
      <img
        src={generateImgUrl(props.comic)}
        onClick={() => handleClick()}
        alt={props.comic.title} />
      {props.comic.title}
    </li>
  )
}

export default ComicListItem
