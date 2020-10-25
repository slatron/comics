import React, { useState } from 'react'

const ComicsList = (props) => {
  const comicsListDOM = props.comics ?
    props.comics.results.map((comic) =>
      <li>{comic.title}</li>
    ) : null

  return (
    <ul>{comicsListDOM}</ul>
  )
}

export default ComicsList
