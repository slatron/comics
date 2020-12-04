import React from 'react'
import Item from 'components/Rankings/Item/Item'

import './Tier.scss'

const Tier = (props) => {

  const itemListDOM = props.items.map((item) => {
    return (
      <Item key={item.key} item={item} />
    )
  })

  return (
    <div data-testid="tier" className={`tier tier-${props.tier.title}`}>
      <p>{props.tier.desc}</p>
      {itemListDOM}
    </div>
  )
}

export default Tier
