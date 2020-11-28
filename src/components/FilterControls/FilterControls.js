import React from 'react'
import './FilterControls.scss'

const FilterControls = (props) => {
  return (
    <div className="filter-controls">
      <select value={props.filterDate} onChange={props.handleFilterDateChange}>
        <option value="lastWeek">Last Week</option>
        <option value="thisWeek">This Week</option>
        <option value="nextWeek">Next Week</option>
        <option value="thisMonth">This Month</option>
      </select>
      {props.comicResults.length
        ? <button
            className={`${props.activeFiler === '(Variant)' ? 'active' : ''}`}
            onClick={() => props.filterComics('(Variant)')}>
            Variants
          </button>
        : null
      }
      {props.comicResults.length
        ? <button
            className={`${props.activeFiler === '(Trade Paperback)' ? 'active' : ''}`}
            onClick={() => props.filterComics('(Trade Paperback)')}>
            Trades
          </button>
        : null
      }
      {props.comicResults.length
        ? <button
        className={`${props.activeFiler === '(all)' ? 'active' : ''}`}
            onClick={props.resetComics}>all</button>
        : null
      }
    </div>
  )
}

export default FilterControls
