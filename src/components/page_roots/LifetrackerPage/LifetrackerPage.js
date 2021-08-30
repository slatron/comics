import React, {useReducer} from 'react'

import CommonTemplate from 'components/Layout/CommonTemplate'
import LifeSection from './LifeSection/LifeSection'
import LifetrackerMenu from './LifetrackerMenu/LifetrackerMenu'

import './lifetrackerPage.scss'

const MULTIPLAYER_MODE = false
const STARTING_LIFE = 20
const STARTING_PLAYERS = 2

const initSections = ({playerCount, startingLife, multiplayerMode}) => {
  return Array.from(new Array(playerCount), (x,i) => {
    return {
      id: i + 1,
      life: startingLife,
      flip: multiplayerMode && (i < (playerCount / 2)),
      name: `Player ${i + 1}`
    }    
  })
}

const initialState = {
  multiplayerMode: false,
  startingLife: 20,
  playerCount: STARTING_PLAYERS,
  sections: initSections({
    playerCount: STARTING_PLAYERS,
    startingLife: STARTING_LIFE,
    multiplayerMode: MULTIPLAYER_MODE
  })
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESET_LIFE': {
      state.sections.forEach(s => s.life = state.startingLife)
      return {...state,
        sections: [...state.sections]
      };
    }
    case 'SET_MULTIPLAYER_MODE': {
      state.sections.forEach(s => s.flip = action.payload && ((s.id - 1) < (state.playerCount / 2)))
      return {...state,
        multiplayerMode: action.payload,
        sections: [...state.sections]
      };
    }
    case 'SET_STARTING_LIFE': {
      return {...state,
        startingLife: action.payload,
        sections: initSections({
          playerCount: state.playerCount,
          startingLife: action.payload,
          multiplayerMode: state.multiplayerMode
        })
      };
    }
    case 'SET_PLAYER_COUNT': {
      return {...state,
        playerCount: action.payload,
        sections: initSections({
          playerCount: action.payload,
          startingLife: state.startingLife,
          multiplayerMode: state.multiplayerMode
        })
      };
    }
    case 'CHANGE_LIFE': {
      const {id, change} = action.payload
      const section = state.sections.find(s => s.id === id)
      section.life += change
      return {...state,
        sections: [...state.sections]
      };
    }
  }
  return state
}

const LifetrackerPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const resetGame = () => dispatch({type: 'RESET_LIFE' })

  const MenuProps = ({
    state,
    dispatch,
    resetGame
  })

  return (
    <CommonTemplate
      drawerChildren={<LifetrackerMenu {...MenuProps} />}
      pageName="lifetracker"
    >
      <div className="full-height-layout">
        <div className="align-row align-content life-tracker-wrapper">
          {state.sections.map(section => {
            section.dispatch = dispatch
            section.playerCount = state.playerCount
            return (
              <section key={section.id} className={`life-section ${state.playerCount < 3 ? 'low-players' : ''}`} >
                <LifeSection {...section} />
              </section>
            )
          })}
        </div>
      </div>
    </CommonTemplate>
  )
}

export default LifetrackerPage
