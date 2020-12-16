import React from 'react'
import ComicListItem from './ComicListItem/ComicListItem'

import './ComicsList.scss'

const ComicsList = (props) => {
  function AllComics() {
    const comicsListDOM = props.comics.length ?
      props.comics.map((comic) =>
        <ComicListItem key={comic.id.toString()} comic={comic} />
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
