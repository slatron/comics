import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {useDispatch} from 'react-redux'
import {lightboxShow, windowshadeShow} from 'store/actions'

import ComicsListItemDetails from 'components/ComicsList/ComicsListItemDetails/ComicsListItemDetails'

const ComicListItem = (props) => {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const dispatch = useDispatch()

  const generateImgUrl = (comic) => {
    return comic.images.length
      ? `${comic.images[0].path}.${comic.images[0].extension}`
      : 'https://via.placeholder.com/150'
  }

  const handleShowDetailsCLick = () => {
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
        <h3>{props.comic.title}</h3>
        {detailsOpen &&
          <ComicsListItemDetails comic={props.comic}></ComicsListItemDetails>
        }
      </div>
      <span
        className="comic-expand"
        onClick={() => handleShowDetailsCLick()}
      >
        &lt;
      </span>
    </li>
  )
}

ComicListItem.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicListItem
