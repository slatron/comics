import React from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import TiersList from 'components/Rankings/TiersList'
import api from 'src/api'
import {useSetTierNames} from 'src/components/Rankings/useSetTierNames'

const McuRankPage = () => {
  const [allMovies, allTiers] = useSetTierNames(api.getTiersFB, api.getMoviesFB)
  if (!allMovies.length || !allTiers.length) return null

  return (
    <CommonTemplate pageName="mcu">
      <TiersList items={allMovies} tiers={allTiers} />
    </CommonTemplate>
  )
}

export default McuRankPage
