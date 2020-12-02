import React from 'react'

const Movie = (props) => {
  return (
    <section
      className={`movie ${props.movie.movieKey}`}
      style={{backgroundImage: `url('./assets/images/${props.movie.movieKey}.jpg')`}}
      key={props.movie.movieKey}
    >
      <span className="ranking clarify">{props.movie.rank}</span>
      <span className="title clarify">
        {props.movie.title}
      </span>
    </section>
  )
}

export default Movie
