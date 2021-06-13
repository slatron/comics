import React from 'react'
import PropTypes from 'prop-types'
import './Item.scss'

const IMG_PATH = window.location.hostname === 'localhost'
 ? './assets/images/'
 : './comics/assets/images/'


const Item = ({item}) => {
  return (
    <section
      className={`item ${item.key}`}
      data-testid="item"
      style={{backgroundImage: `url('${IMG_PATH}${item.key}.jpg')`}}
      key={item.key}
    >
      <span className="ranking clarify">{item.rank}</span>
      <span className="title clarify">
        {item.title}
      </span>
    </section>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
