import React, { useState, useEffect } from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import TiersList from 'components/Rankings/TiersList'
import { sorting } from 'utils/sorting'
import api from 'src/api'

let tiersKey = {}
let tiersBreakpoints = []
const setTierName = rank => {
  let rankKey;
  for (let i = 0; i < tiersBreakpoints.length; i++) {
    if (rank <= tiersBreakpoints[i]) {
      rankKey = tiersBreakpoints[i]
      break
    }
  }
  return tiersKey[rankKey || 'last']
}

const RemRankPage = () => {
  const [allAlbums, setAllAlbums] = useState([])
  const [allTiers, setAllTiers] = useState([])
  useEffect(() => getTiers(), []);

  function getTiers() {
    api.getRemTiersFB().then(snapshot => {
      const sortedTiers = snapshot.val().sort(sorting().sortBy('lowest', true))
      sortedTiers.forEach(t => {
        t.lowest && tiersBreakpoints.push(t.lowest)
        tiersKey[t.lowest || 'last'] = t.title
      })
      getAlbums(sortedTiers)
    })
  }

  function getAlbums(tiers) {
    api.getRemAlbumsFB().then(snapshot => {
      const sortedAlbums = snapshot.val().sort(sorting().sortBy('rank', true))
      const albumsWithTier = sortedAlbums.map(a => {
        return {
          ...a,
          tier: setTierName(a.rank)
        }
      })
      setAllTiers(tiers)
      setAllAlbums(albumsWithTier)
    })

  }

  if (!allAlbums.length || !allTiers.length) return null

  return (
    <CommonTemplate pageName="rem">
      <TiersList items={allAlbums} tiers={allTiers} />
    </CommonTemplate>
  )
}

export default RemRankPage
