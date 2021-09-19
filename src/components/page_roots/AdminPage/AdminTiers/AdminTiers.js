import React, {useEffect, useState} from 'react'
import api from 'src/api'
import {sorting} from 'src/utils/sorting'
import TiersNameForm from './TiersNameForm'
import SortListItems from './SortListItems'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const AdminTiers = () => {
    const [allTiers, setAllTiers] = useState([])

    useEffect(() => getRemTiers(), [])

    function getRemTiers() {
        api.getRemTiersFB().then(snapshot => {
            const sortedTiers = snapshot.val().sort(sorting().sortBy('position', true))
            setAllTiers(sortedTiers)
        })
    }

    const tiersContent = allTiers.length
        ? (
          <>
            <DndProvider backend={HTML5Backend}>
              <SortListItems />
            </DndProvider>
            <TiersNameForm tiers={allTiers} />
          </>
        )
        : <div className="loading">loading...</div>

    return (
    <div className="admin-tiers-list">
        {tiersContent}
    </div>
    )
}

export default AdminTiers
