import React, { useState, useEffect } from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import TiersList from 'components/Rankings/TiersList/TiersList'
import { sorting } from 'utils/sorting'
import api from 'src/api/api'

const RemRankPage = () => {
  const [allAlbums, setAllAlbums] = useState([])
  const [allTiers, setAllTiers] = useState([])

  useEffect(() => {
    getAlbums()
  }, []);

  function getAlbums() {
    api.getRemAlbumsFB().then(snapshot => {
      const sortedAlbums = snapshot.val().sort(sorting().sortBy('rank', true))
      setAllAlbums(sortedAlbums)
    })
    api.getRemTiersFB().then(snapshot => {
      const sortedTiers = snapshot.val().sort(sorting().sortBy('position', true))
      setAllTiers(sortedTiers)
    })
  }

  return (
    <>
      <CommonTemplate pageName="rem">
        <TiersList items={allAlbums} tiers={allTiers} />
      </CommonTemplate>
    </>
  )
}

export default RemRankPage
