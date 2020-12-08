import React, {useEffect, useState} from 'react'
import api from 'src/api/api'
import {sorting} from 'src/utils/sorting'
import TiersNameForm from 'src/components/forms/TiersNameForm/TiersNameForm'

const AdminTiers = () => {
    const [allTiers, setAllTiers] = useState([])

    useEffect(() => {
      getRemTiers()
    }, []);

    function getRemTiers() {
        api.getRemTiersFB().then(snapshot => {
            const sortedTiers = snapshot.val().sort(sorting().sortBy('position', true))
            setAllTiers(sortedTiers)
        })
    }

    const tiersContent = allTiers.length
    ? < TiersNameForm tiers={allTiers} />
    : <div className="loading">loading...</div>

    return (
    <div className="admin-tiers-list">
        {tiersContent}
    </div>
    )
}

export default AdminTiers
