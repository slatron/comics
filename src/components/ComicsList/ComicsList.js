import React, { useState } from 'react'
import './ComicsList.scss'

const ComicsList = (props) => {
  function generateImgUrl(comic) {
    return comic.images.length
      ? `${comic.images[0].path}.${comic.images[0].extension}`
      : 'https://via.placeholder.com/150'
  }

  const comicsListDOM = props.comics.length ?
    props.comics.map((comic) =>
      <li key={comic.id.toString()}>
        <img src={generateImgUrl(comic)} alt={comic.title} />
        {comic.title}
      </li>
    ) : <div className="loading">loading...</div>

  return (
    <ul>{comicsListDOM}</ul>
  )
}

export default ComicsList
