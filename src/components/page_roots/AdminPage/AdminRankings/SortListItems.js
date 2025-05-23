import React from 'react'
import PropTypes from 'prop-types'
import MoveableItem from './MoveableItem'
import update from 'immutability-helper';

const SortListItems = ({items, setItems, getItems, saveRankings}) => {
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

  React.useEffect(() => {
    console.log({items});
  }, [items]);

  return (
    <div>
      {items.map((item, i) => (<MoveableItem key={item.key} index={i} item={item} getItems={getItems} moveItem={moveItem}/>))}
      <button type="button" onClick={saveItems}>Save</button>
    </div>
  )
}

SortListItems.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func,
  saveRankings: PropTypes.func,
  getItems: PropTypes.func,
}

export default SortListItems