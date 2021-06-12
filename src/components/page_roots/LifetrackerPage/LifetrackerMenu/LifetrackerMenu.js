import React from 'react'
import PropTypes from 'prop-types'
import './lifetrackerMenu.scss'

const LifetrackerMenu = ({
  state,
  dispatch,
  resetGame
}) => (
  <div className="life-tracker-menu">
    <fieldset>
      <label>Players</label>
      <div className="input-container">
        <select
          value={state.playerCount}
          onChange={e => dispatch({type: 'SET_PLAYER_COUNT', payload: parseInt(e.target.value) })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </fieldset>
    <fieldset>
      <label>Life</label>
      <div className="input-container">
        <select
          value={state.startingLife}
          onChange={e => dispatch({type: 'SET_STARTING_LIFE', payload: parseInt(e.target.value) })}
        >
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </div>
    </fieldset>
    <fieldset>
      <label htmlFor="multiplayer_cb">Flip</label>
      <div className="input-container">
        <input
          id="multiplayer_cb"
          checked={state.multiplayerMode}
          type="checkbox"
          onChange={e => dispatch({type: 'SET_MULTIPLAYER_MODE', payload: e.target.checked })}
        />
      </div>
    </fieldset>
    <fieldset>
      <button type="button" onClick={() => resetGame()}>Reset</button>
    </fieldset>
  </div>
)

LifetrackerMenu.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
  resetGame: PropTypes.func
}

export default LifetrackerMenu
