import React, { useEffect } from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import TiersList from 'components/Rankings/TiersList/TiersList'
import { sorting } from 'utils/sorting'
import { useLocalStorage } from 'hooks/useLocalStorage';
import api from 'src/api/api'

const McuRankPage = () => {
  const [allMovies, setAllMovies] = useLocalStorage('allMovies', [])
  const [allTiers, setAllTiers] = useLocalStorage('allTiers', [])
  
  const getMovies = () => {
    api.getMoviesFB().then(snapshot => {
      const sortedMovies = snapshot.val().sort(sorting().sortBy('rank', true))
      setAllMovies(sortedMovies)
    })
    api.getTiersFB().then(snapshot => {
      const sortedTiers = snapshot.val().sort(sorting().sortBy('position', true))
      setAllTiers(sortedTiers)
    })
  }

  useEffect(getMovies, [setAllMovies, setAllTiers]);

  return (
    <>
      <CommonTemplate pageName="mcu">
        <TiersList items={allMovies} tiers={allTiers} />
      </CommonTemplate>
    </>
  )
}

export default McuRankPage
