import React from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import TiersList from 'components/Rankings/TiersList'
import api from 'src/api'
import {useSetTierNames} from 'src/components/Rankings/useSetTierNames'

const RemRankPage = () => {
  const [allAlbums, allTiers] = useSetTierNames(api.getRemTiersFB, api.getRemAlbumsFB)
  if (!allAlbums.length || !allTiers.length) return null

  return (
    <CommonTemplate pageName="rem">
      <TiersList items={allAlbums} tiers={allTiers} />
    </CommonTemplate>
  )
}

export default RemRankPage
