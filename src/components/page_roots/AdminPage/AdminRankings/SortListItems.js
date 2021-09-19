import React from 'react'
import PropTypes from 'prop-types'
import api from 'src/api'
import MoveableItem from './MoveableItem'
import update from 'immutability-helper';

const SortListItems = ({items, setItems, saveRankings}) => {
  const moveItem = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];
    setItems(update(items, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragItem],
        ],
    }));
  };

  const saveItems = () => {
    saveRankings(items.map((item, idx) => {
      item.rank = idx + 1
      return item
    }))
  }

  return (
    <div>
      {items.map((item, i) => (<MoveableItem key={item.key} index={i} id={item.key} text={item.title} moveItem={moveItem}/>))}
      <button type="button" onClick={saveItems}>Save</button>
    </div>
  )
}

SortListItems.prototypes = {
  items: PropTypes.array,
  setItems: PropTypes.func,
  saveRankings: PropTypes.func
}

export default SortListItems