import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {sorting} from 'src/utils/sorting'
import TiersNameForm from './TiersNameForm'
import SortListItems from './SortListItems'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const AdminRankings = ({itemsAPI, tiersAPI, updateTierData, saveRankings}) => {
    const [tiers, setTiers] = useState([])
    const [items, setItems] = useState([])
    const [newTitle, setNewTitle] = useState('')
    const [newMovieKey, setNewMovieKey] = useState('')
    useEffect(() => getTiers(), [])
    useEffect(() => getItems(), []);
  
    function getItems() {
      itemsAPI().then(snapshot => {
        const sortedItems = snapshot.val().sort(sorting().sortBy('rank', true))
        setItems(sortedItems)
      })
    }

    function getTiers() {
      tiersAPI().then(snapshot => {
        const sortedTiers = snapshot.val().sort(sorting().sortBy('position', true))
        setTiers(sortedTiers)
      })
    }

    function handleAddItem() {
      if (!newTitle || !newMovieKey || newMovieKey.indexOf(' ') > -1) return
      saveRankings([
        ...items,
        {title: newTitle, rank: items.length + 1, key: newMovieKey.trim()}
      ])
      setNewTitle('')
      setNewMovieKey('')
    }

    const tiersContent = tiers.length
        ? (
          <>
            <DndProvider backend={HTML5Backend}>
              <SortListItems items={items} setItems={setItems} getItems={getItems} saveRankings={saveRankings} />
            </DndProvider>
            <div>
              <input value={newTitle} placeholder="Title" onChange={e => setNewTitle(e.target.value)}/>
              <input value={newMovieKey} placeholder="Key" onChange={e => setNewMovieKey(e.target.value)}/>
              <button type="button" onClick={handleAddItem}>Add New Item</button>
            </div>
            <TiersNameForm tiers={tiers} updateTierData={updateTierData} />
          </>
        )
        : <div className="loading">loading...</div>

    return (
    <div className="admin-tiers-list">
        {tiersContent}
    </div>
    )
}

AdminRankings.propTypes = {
  itemsAPI: PropTypes.func,
  saveRankings: PropTypes.func,
  tiersAPI: PropTypes.func,
  updateTierData: PropTypes.func
}

export default AdminRankings
