import React from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import TiersList from 'components/Rankings/TiersList'
import Item from 'components/Rankings/Item'
import api from 'src/api'
import {useSetTierNames} from 'src/components/Rankings/useSetTierNames'
import {sorting} from 'src/utils/sorting'

import './mcuRankPage.scss'
;
const McuRankPage = () => {
  const [sorted, setSorted] = React.useState(false);
  const [allMovies, allTiers] = useSetTierNames(api.getTiersFB, api.getMoviesFB)

  if (!allMovies.length || !allTiers.length) return null

  const pageContent = sorted ? allMovies.sort(sorting().sortBy('release', true)).map((item) => (
    <Item key={item.key} item={item} />
  )) : <TiersList items={allMovies} tiers={allTiers} />;

  return (
    <CommonTemplate pageName="mcu">
      <div className="heading-nav">
      <div><strong>Sorted By: </strong> {sorted ? 'release date' : 'tiers'}</div>
        <button onClick={() => setSorted(false)}>tiers</button>
        <button onClick={() => setSorted(true)}>release date</button>
      </div>
      {pageContent}
    </CommonTemplate>
  )
}

export default McuRankPage
