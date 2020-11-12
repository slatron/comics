import React from 'react'
import Movie from 'components/Movie/Movie'

const Tier = (props) => {

  const movieListDOM = props.movies.map((movie) => {
    return (
      <Movie movie={movie} />
    )
  })

  return (
    <div class={`tier tier-${props.tier.title}`}>
      <p>{props.tier.desc}</p>
      {movieListDOM}
    </div>
  )
}

export default Tier
