import React from 'react'
import './FilterControls.scss'

const FilterControls = (props) => {
  return (
    <div className="filter-controls">
      <h6 onClick={props.toggleFilterOpen}>+ Filter Results</h6>
      <div className={`filter-controls-body ${props.filterOpen ? 'active' : ''}`}>
        <select
          value={props.filterDate}
          onChange={props.handleFilterDateChange}>
          <option value="lastWeek">Last Week</option>
          <option value="thisWeek">This Week</option>
          <option value="nextWeek">Next Week</option>
          <option value="thisMonth">This Month</option>
        </select>
        {props.comicResults.length
          ? <>
              <div
                className={`switch ${props.activeFiler === '(all)' ? 'active' : ''}`}
                onClick={props.resetComics}>
                All
              </div>
              <div
                className={`switch ${props.activeFiler === '(Variant)' ? 'active' : ''}`}
                onClick={() => props.filterComics('(Variant)')}>
                Variants
              </div>
              <div
                className={`switch ${props.activeFiler === '(Trade Paperback)' ? 'active' : ''}`}
                onClick={() => props.filterComics('(Trade Paperback)')}>
                Trades
              </div>
            </>
          : null
        }
      </div>
    </div>
  )
}

export default FilterControls
