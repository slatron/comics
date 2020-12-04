import React from 'react'

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

export default Item
