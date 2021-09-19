import React from 'react'
import PropTypes from 'prop-types'
import Item from 'components/Rankings/Item'

import './Tier.scss'

const Tier = ({items, tier}) => {

  const itemListDOM = items.map((item) => (
      <Item key={item.key} item={item} />
    )
  )

  return (
    <div data-testid="tier" className={`tier tier-${tier.title}`}>
      <p>{tier.desc}</p>
      {itemListDOM}
    </div>
  )
}


Tier.propTypes = {
  items: PropTypes.array,
  tier: PropTypes.object
}

export default Tier
