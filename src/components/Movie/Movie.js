import React from 'react'

const Movie = (props) => {
  return (
    <section
      className={`movie ${props.movie.movieKey}`}
      key={props.movie.key}
    >
      <span className="ranking clarify">{props.movie.rank}</span>
      <span className="title clarify">
        {props.movie.title}
      </span>
    </section>
  )
}

export default Movie
