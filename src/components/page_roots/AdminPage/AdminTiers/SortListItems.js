import React, {useEffect, useState} from 'react'
import api from 'src/api'
import { sorting } from 'utils/sorting'
import MoveableItem from './MoveableItem'
import update from 'immutability-helper';

const SortListItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => getItems(), []);

  function getItems() {
    api.getRemAlbumsFB().then(snapshot => {
      const sortedItems = snapshot.val().sort(sorting().sortBy('rank', true))
      setItems(sortedItems)
    })
  }

  const moveItem = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];
    setItems(update(items, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragItem],
        ],
    }));
  };

  // const saveItems = () => api.updateRemAlbumsFB(items)
  const saveItems = () => {
    api.updateRemAlbumsFB(items.map((item, idx) => {
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

export default SortListItems