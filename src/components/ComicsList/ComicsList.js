import React, { useState } from 'react'

const ComicsList = (props) => {
  const comicsListDOM = props.comics ?
    props.comics.map((comic) =>
      <li>
        <img width="100" src={`${comic.images[0].path}.${comic.images[0].extension}`} alt={comic.title} />
        {comic.title}
      </li>
    ) : null

  return (
    <ul>{comicsListDOM}</ul>
  )
}

export default ComicsList
