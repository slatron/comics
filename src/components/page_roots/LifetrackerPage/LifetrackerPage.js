import React, {useState} from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import LifeSection from './LifeSection/LifeSection'
import LifetrackerMenu from './LifetrackerMenu/LifetrackerMenu'
import {useInitLifetracker} from './useInitLifetracker'

import './lifetrackerPage.scss'

const MULTIPLAYER_MODE = false
const STARTING_LIFE = 20
const STARTING_PLAYERS = 2

const LifetrackerPage = () => {
  const [startingLife, setStartingLife] = useState(() => STARTING_LIFE)
  const [playerCount, setPlayerCount] = useState(() => STARTING_PLAYERS)
  const [multiplayerMode, setMultiplayerMode] = useState(() => MULTIPLAYER_MODE)
  
  const lifeSections = useInitLifetracker({playerCount, startingLife, multiplayerMode})

  const resetGame = () => setStartingLife(20)

  const MenuProps = ({
    playerCount,
    startingLife,
    multiplayerMode,
    setPlayerCount,
    setStartingLife,
    setMultiplayerMode,
    resetGame
  })

  return (
    <CommonTemplate
      drawerChildren={<LifetrackerMenu {...MenuProps} />}
      pageName="lifetracker"
    >
      <div className="full-height-layout">
        <div className="align-row align-content life-tracker-wrapper">
          {lifeSections.map(section =>
            <section key={section.id} className={`life-section ${playerCount < 3 ? 'low-players' : ''}`} >
              <LifeSection {...section} />
            </section>)
          }
        </div>
      </div>
    </CommonTemplate>
  )
}

export default LifetrackerPage
