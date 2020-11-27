import React from 'react'
import Movie from 'components/Movie/Movie'

const Tier = (props) => {

  const movieListDOM = props.movies.map((movie) => {
    return (
      <Movie key={movie.movieKey} movie={movie} />
    )
  })

  return (
    <div className={`tier tier-${props.tier.title}`}>
      <p>{props.tier.desc}</p>
      {movieListDOM}
    </div>
  )
}

export default Tier
