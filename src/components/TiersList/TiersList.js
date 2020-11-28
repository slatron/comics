// This component takes the movies and tiers and sorts them into Tier components
import React, { useState } from 'react'
import Tier from 'components/Tier/Tier'

const TiersList = (props) => {

  // Sort movies into object keyed by tier title
  const moviesByTier = {}
  props.movies.forEach(movie => {
    if (!moviesByTier[movie.tier]) moviesByTier[movie.tier] = []
    moviesByTier[movie.tier].push(movie)
  })

  // Generate list of tiers if populated
  const tiersListDOM = props.tiers.length ?
    props.tiers.map((tier) => {
      return <Tier tier={tier} key={tier.title} movies={moviesByTier[tier.title]} />
    }) : <div className="loading">loading...</div>

  return (
    <div className="tiers-list">
      {tiersListDOM}
    </div>
  )
}

export default TiersList
