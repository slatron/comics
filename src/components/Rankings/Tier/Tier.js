import React from 'react'
import PropTypes from 'prop-types'
import Item from 'components/Rankings/Item'
import {sorting} from 'src/utils/sorting'

import './Tier.scss'

const Tier = ({items, tier}) => {

  const itemListDOM = items.sort(sorting().sortBy('rank', true)).map((item) => (
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
