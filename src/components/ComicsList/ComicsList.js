import React from 'react'
import './ComicsList.scss'

import {useSelector, useDispatch} from 'react-redux'
import { lightboxShow } from 'store/actions'

const ComicsList = (props) => {
  const lightboxObj = useSelector(state => state.lightbox)
  const dispatch = useDispatch()

  function AllComics() {
    const generateImgUrl = (comic) => {
      return comic.images.length
        ? `${comic.images[0].path}.${comic.images[0].extension}`
        : 'https://via.placeholder.com/150'
    }

    const comicsListDOM = props.comics.length ?
      props.comics.map((comic) =>
        <li key={comic.id.toString()}>
          <img
            src={generateImgUrl(comic)}
            onClick={() => dispatch(lightboxShow({...comic, ...{url: generateImgUrl(comic)}} ))   }
            alt={comic.title} />
          {comic.title}
        </li>
      ) : <div className="loading">loading...</div>

    return (
      <ul className="comics-list">
        {comicsListDOM}
      </ul>
    );
  }

  return (
    <AllComics />
  )
}

export default ComicsList
