import React from 'react'
import PropTypes from 'prop-types'

import ComicListItem from './ComicListItem/ComicListItem'

import './ComicsList.scss'

const ComicsList = ({comics}) => {
  function AllComics() {
    const comicsListDOM = comics.length ?
      comics.map((comic) =>
        <ComicListItem key={comic.id.toString()} comic={comic} />
      ) : <div>no comics in selected filter</div>

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

ComicsList.propTypes = {
  comics: PropTypes.array
}

export default ComicsList
