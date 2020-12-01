import React, { useState } from 'react'
import './ComicsList.scss'
import LightboxContext from 'components/Layout/Lightbox/LightboxContext'

const ComicsList = (props) => {
  function AllComics({handleLightboxToggle}) {
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
            onClick={() => handleLightboxToggle(comic, generateImgUrl(comic))}
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
    <LightboxContext.Consumer>
      {(handleLightboxToggle) =>
        <AllComics handleLightboxToggle={handleLightboxToggle} />
      }
    </LightboxContext.Consumer>
  )
}

export default ComicsList
