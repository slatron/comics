import React from 'react'
import PropTypes from 'prop-types'

import './lifeSection.scss'

const LifeSection = ({id, flip, life, name, dispatch}) => {
  return (
    <div className={`full-height-layout life-section ${flip ? 'flip' : ''}`}>
      <div className="header-row align-row align-header">
        <section>
          <span>{name}</span>
        </section>
      </div>
      <div
        className="align-content centered align-row align-footer"
        onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, change: -1}})}
      >
        {life}
      </div>
      <div className="double-col-row">
        <section className="centered">
          <button
            className="down"
            onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, change: -1}})}
            type="button"
          >
            -1
          </button>
          <button
            className="down-big"
            onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, change: -5}})}
            type="button"
          >
            -5
          </button>
        </section>
        <section className="centered">
          <button
            className="up-big"
            onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, change: 5}})}
            type="button"
          >
            +5
          </button>
          <button
            className="up"
            onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, change: 1}})}
            type="button"
          >
            +1
          </button>
        </section>
      </div>
    </div>
  )
}

LifeSection.propTypes = {
  id: PropTypes.number,
  flip: PropTypes.bool,
  life: PropTypes.number,
  name: PropTypes.string,
  dispatch: PropTypes.func
}

export default LifeSection

