import React from 'react'
import './lifetrackerMenu.scss'

const LifetrackerMenu = ({
  playerCount,
  startingLife,
  multiplayerMode,
  setPlayerCount,
  setStartingLife,
  setMultiplayerMode,
  resetGame
}) => (
  <div className="life-tracker-menu">
    <fieldset>
      <label>Players</label>
      <div className="input-container">
        <select
          value={playerCount}
          onChange={(e) => setPlayerCount(parseInt(e.target.value))}
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
          value={startingLife}
          onChange={(e) => setStartingLife(parseInt(e.target.value))}
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
          checked={multiplayerMode}
          type="checkbox"
          onChange={(e) => setMultiplayerMode(e.target.checked)}
        />
      </div>
    </fieldset>
    <fieldset>
      <button onClick={() => resetGame()}>Reset</button>
    </fieldset>
  </div>
)

export default LifetrackerMenu
