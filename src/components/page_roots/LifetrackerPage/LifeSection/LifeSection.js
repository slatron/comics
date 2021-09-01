import React, {useReducer, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

import './lifeSection.scss'

import LifeButton from './LifeButton'
import CounterSection from './CounterSection'
import Pawn from './Pawn'

const ALL_COLORS = ['aqua', 'pink', 'yellow', 'goldenrod', 'plum', 'thistle']

const getInitColors = (playerCount, id) => {
  const colorCount = playerCount - 1 || 1
  const OTHER_COLORS = [...ALL_COLORS]
  // remove id index
  OTHER_COLORS.splice(id - 1, 1)
  return OTHER_COLORS.splice(0, colorCount)
}

const initialCountersState = (playerCount, id) => {
  return {
    colors: getInitColors(playerCount, id),
    counters: {}
  }
} 

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COUNTER': {
      const {color, change} = action.payload
      state.counters[color] += change
      return {...state};
    }
    case 'ASSIGN_COLOR': {
      const {color} = action.payload
      state.counters[color] = 0
      state.colors = state.colors.filter(c => c !== color)
      return {...state};
    }
    case 'INIT_COLORS': {
      const {playerCount, id} = action.payload
      const newColors = getInitColors(playerCount, id)
      state.colors = newColors
      state.counters = {}
      return {...state};
    }
  }
  return state
}

const LifeSection = ({id, flip, life, name, dispatch, playerCount}) => {
  
  const [viewCounters, setViewCounters] = useState(false)
  const [currentPlayerCount, setPlayerCount] = useState(playerCount)
  const [state, counterDispatch] = useReducer(reducer, initialCountersState(playerCount, id))

  useEffect(() => {
    if (playerCount !== currentPlayerCount) {
      setPlayerCount(playerCount)
      counterDispatch({type: 'INIT_COLORS', payload: {id, playerCount}})
    }
  }, [playerCount, id])

  return (
    <div className={`full-height-layout life-section ${flip ? 'flip' : ''}`}>
      <div className="header-row align-row align-header">
        <section>
          <span>{name}</span>
        </section>
      </div>

      <section className={`counter-area${viewCounters ? ' active': ''}`}>
        <span class="counter-area-control-icon" onClick={() => setViewCounters(!viewCounters)}>
          <Pawn />
        </span>
        <section className="counter-sections">
          <CounterSection available={state.colors} counters={state.counters} counterDispatch={counterDispatch} />
        </section>
      </section>
      <div
        className="align-content centered align-row align-footer"
        onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, change: -1}})}
      >
        {life}
      </div>
      <div className="double-col-row">
        <section className="centered">
          <LifeButton cls="down" change={-1} dispatch={dispatch} id={id} />
          <LifeButton cls="down-big" change={-5} dispatch={dispatch} id={id} />
        </section>
        <section className="centered">
          <LifeButton cls="up-big" change={+5} dispatch={dispatch} id={id} />
          <LifeButton cls="up" change={+1} dispatch={dispatch} id={id} />
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
  dispatch: PropTypes.func,
  playerCount: PropTypes.number
}

export default LifeSection

