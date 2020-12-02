import React, { useEffect } from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import TiersList from 'components/Rankings/TiersList/TiersList'
import { sorting } from 'utils/sorting'
import { useLocalStorage } from 'hooks/useLocalStorage';
import api from 'src/api/api'

const McuRankPage = () => {
  let [allMovies, setAllMovies] = useLocalStorage('allMovies', [])
  let [allTiers, setAllTiers] = useLocalStorage('allTiers', [])

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
