import { useState, useEffect } from 'react'
import { sorting } from 'utils/sorting'

export const useSetTierNames = (tiersAPI, itemsAPI) => {
  const [allItems, setAllItems] = useState([])
  const [allTiers, setAllTiers] = useState([])
  useEffect(() => getTiers(), []);

  let tiersKey = {}
  let tiersBreakpoints = []

  const setTierName = rank => {
    let rankKey;
    for (let i = 0; i < tiersBreakpoints.length; i++) {
      if (rank <= tiersBreakpoints[i]) {
        rankKey = tiersBreakpoints[i]
        break
      }
    }
    return tiersKey[rankKey || 'last']
  }

  function getTiers() {
    tiersAPI().then(snapshot => {
      const sortedTiers = snapshot.val().sort(sorting().sortBy('position', true))
      sortedTiers.forEach(t => {
        t.lowest && tiersBreakpoints.push(t.lowest)
        tiersKey[t.lowest || 'last'] = t.title
      })
      getItems(sortedTiers)
    })
  }

  function getItems(tiers) {
    itemsAPI().then(snapshot => {
      const sortedItems = snapshot.val().sort(sorting().sortBy('rank', true))
      const itemsWithTier = sortedItems.map(a => {
        return {
          ...a,
          tier: setTierName(a.rank)
        }
      })
      setAllTiers(tiers)
      setAllItems(itemsWithTier)
    })

  }

  return [allItems, allTiers]
}
