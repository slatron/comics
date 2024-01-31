import React, { useState } from 'react'
import PropTypes from 'prop-types'

const IMG_PATH = window.location.hostname === 'localhost'
 ? './assets/images/'
 : './comics/assets/images/'


const Item = ({item}) => {
  const [showReview, setShowReview] = useState(false);
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
      {item.review && (
        <span onClick={() => setShowReview(true)} className="icon-info clarify">
          i
        </span>
      )}
      {showReview && item.review && (
        <>
        <div
          className="item-review"
          onClick={() => setShowReview(false)}
        />
        <div className="item-review-text" onClick={() => setShowReview(false)}>{item.review}</div>
        </>
      )}
    </section>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
