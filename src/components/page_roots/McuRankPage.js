import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CommonTemplate from 'components/Layout/CommonTemplate'
import TiersList from 'components/TiersList/TiersList'
import { sorting } from 'utils/sorting'
import api from 'src/api/api'

const McuRankPage = () => {
  let [allMovies, setAllMovies] = useState([])
  let [allTiers, setAllTiers] = useState([])

  useEffect(() => {
    getMovies()
  }, []);

  function getMovies() {
    api.getMoviesFB().then(snapshot => {
      const sortedMovies = snapshot.val().sort(sorting().sortBy('rank', true))
      setAllMovies(sortedMovies)
    })
    api.getTiersFB().then(snapshot => {
      const sortedTiers = snapshot.val().sort(sorting().sortBy('position', true))
      setAllTiers(sortedTiers)
    })
  }

  return (
    <>
      <CommonTemplate pageName="mcu">
        <TiersList movies={allMovies} tiers={allTiers} />
      </CommonTemplate>
    </>
  )
}

export default McuRankPage
