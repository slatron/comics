// This component takes items and tiers and sorts them into Tier components
import React from 'react'
import PropTypes from 'prop-types'
import Tier from 'components/Rankings/Tier'

const TiersList = ({items, tiers}) => {
  // Sort items into object keyed by tier title
  const itemsByTier = {}
  items.forEach(item => {
    if (!itemsByTier[item.tier]) itemsByTier[item.tier] = []
    itemsByTier[item.tier].push(item)
  })

  // Generate list of tiers if populated
  const tiersListDOM = tiers.length
    ? tiers.map(tier => itemsByTier[tier.title] ? <Tier tier={tier} key={tier.title} items={itemsByTier[tier.title]} /> : null) 
    : <div className="loading">loading...</div>

  return (
    <div className="tiers-list">
      {tiersListDOM}
    </div>
  )
}

TiersList.propTypes = {
  items: PropTypes.array,
  tiers: PropTypes.array
}

export default TiersList
