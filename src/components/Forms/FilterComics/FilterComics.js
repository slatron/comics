import React, { useState } from 'react'
import './FilterComics.scss'

const FilterComics = (props) => {
  const [filterOpen, setFilterOpen] = useState(false)
  const toggleFilterOpen = () => {
    setFilterOpen(!filterOpen)
  }

  return (
    <div className="filter-controls">
      <h6 onClick={toggleFilterOpen}>+ Filter Results</h6>
      <div className={`filter-controls-body ${filterOpen ? 'active' : ''}`}>
        <select
          value={props.filterDate}
          onChange={props.handleFilterDateChange}>
          <option value="lastWeek">Last Week</option>
          <option value="thisWeek">This Week</option>
          <option value="nextWeek">Next Week</option>
          <option value="thisMonth">This Month</option>
        </select>
        <div
          className={`switch ${props.activeFilter === '(all)' ? 'active' : ''}`}
          onClick={props.resetComics}>
          All
        </div>
        <div
          className={`switch ${props.activeFilter === '(Variant)' ? 'active' : ''}`}
          onClick={() => props.filterComics('(Variant)')}>
          Variants
        </div>
        <div
          className={`switch ${props.activeFilter === '(Trade Paperback)' ? 'active' : ''}`}
          onClick={() => props.filterComics('(Trade Paperback)')}>
          Trades
        </div>
    </div>
  </div>
  )
}

export default FilterComics
