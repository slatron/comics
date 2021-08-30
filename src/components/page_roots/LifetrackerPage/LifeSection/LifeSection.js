import React, {useReducer, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

import './lifeSection.scss'

import LifeButton from './LifeButton'

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
      state.colors = state.color.filter(c => c !== color)
      return {...state};
    }
    case 'INIT_COLORS': {
      const {playerCount, id} = action.payload
      state.colors = getInitColors(playerCount, id)
      return {...state};
    }
  }
  return state
}

const LifeSection = ({id, flip, life, name, dispatch, playerCount}) => {
  
  const [viewCounters, setViewCounters] = useState(false)
  const [state, counterDispatch] = useReducer(reducer, initialCountersState(playerCount, id))

  useEffect(() => {
    counterDispatch({type: 'INIT_COLORS', payload: {id, playerCount}})
  }, [playerCount, id])

  console.log(id, state.colors)

  const changeCounter = (up) => {
    console.log(up ? 'up' : 'down')
  }

  const CounterSection = () => (
    <section className="counter-sections">
      <div className="choose-color-section centered">
        colorss
      </div>
      <div
        className="counter-section centered"
        style={{'background-color': 'hotpink'}}
      >
        <button
          className="down"
          onClick={() => changeCounter(false)}
        >
          -1
        </button>
        <span className="counter-count">
          counters
        </span>
        <button
          className="up"
          onClick={() => changeCounter(true)}
        >
          +1
        </button>
      </div>
    </section>
  )

  return (
    <div className={`full-height-layout life-section ${flip ? 'flip' : ''}`}>
      <div className="header-row align-row align-header">
        <section>
          <span>{name}</span>
        </section>
      </div>

      <section className={`counter-area${viewCounters ? ' active': ''}`}>
        <i
          className="ms ms-planeswalker ms-shadow"
          onClick={() => setViewCounters(!viewCounters)}
        />
        <section className="counter-sections">
          <CounterSection />
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
          <LifeButton cls="down-big" change={+5} dispatch={dispatch} id={id} />
          <LifeButton cls="down-big" change={+1} dispatch={dispatch} id={id} />
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

