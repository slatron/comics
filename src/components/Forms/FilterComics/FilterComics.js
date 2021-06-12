import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './FilterComics.scss'

const FilterComics = ({
  filterComics,
  activeFilter,
  resetComics,
  handleFilterDateChange,
  filterDate
}) => {
  const [filterOpen, setFilterOpen] = useState(false)
  const toggleFilterOpen = () => {
    setFilterOpen(!filterOpen)
  }

  return (
    <div className="filter-controls">
      <h6 onClick={toggleFilterOpen}>+ Filter Results</h6>
      <div className={`filter-controls-body ${filterOpen ? 'active' : ''}`}>
        <select
          value={filterDate}
          onChange={handleFilterDateChange}
        >
          <option value="lastWeek">Last Week</option>
          <option value="thisWeek">This Week</option>
          <option value="nextWeek">Next Week</option>
          <option value="thisMonth">This Month</option>
        </select>
        <div
          className={`switch ${activeFilter === '(all)' ? 'active' : ''}`}
          onClick={resetComics}
        >
          All
        </div>
        <div
          className={`switch ${activeFilter === '(Variant)' ? 'active' : ''}`}
          onClick={() => filterComics('(Variant)')}
        >
          Variants
        </div>
        <div
          className={`switch ${activeFilter === '(Trade Paperback)' ? 'active' : ''}`}
          onClick={() => filterComics('(Trade Paperback)')}
        >
          Trades
        </div>
      </div>
    </div>
  )
}

FilterComics.propTypes = {
  filterComics: PropTypes.func,
  activeFilter: PropTypes.string,
  resetComics: PropTypes.func,
  handleFilterDateChange: PropTypes.func,
  filterDate: PropTypes.string
}

export default FilterComics
