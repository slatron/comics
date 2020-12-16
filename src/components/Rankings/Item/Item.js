import React from 'react'
import PropTypes from 'prop-types'
import './Item.scss'

const Item = (props) => {
  return (
    <section
      className={`item ${props.item.key}`}
      data-testid="item"
      style={{backgroundImage: `url('./assets/images/${props.item.key}.jpg')`}}
      key={props.item.key}
    >
      <span className="ranking clarify">{props.item.rank}</span>
      <span className="title clarify">
        {props.item.title}
      </span>
    </section>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
