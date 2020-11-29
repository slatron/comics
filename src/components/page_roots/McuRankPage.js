import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import HeaderBar from 'components/HeaderBar/HeaderBar'
import Drawer from 'components/Drawer/Drawer'
import TiersList from 'components/TiersList/TiersList'
import { sorting } from 'utils/sorting'
import api from 'src/api/api'

const McuRankPage = () => {
  let [allMovies, setAllMovies] = useState([])
  let [allTiers, setAllTiers] = useState([])
  let [drawerActive, setDrawerActive] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerActive(!drawerActive)
  };

  useEffect(() => {
    getMovies()
  }, []);

  function getMovies() {
    api.getMoviesFB().then(snapshot => {
      const sortedMovies = snapshot.val().sort(sorting().sortBy('rank', true))
      setAllMovies(sortedMovies)
    })
    api.getTiersFB().then(snapshot => {
      const sortedTiers = snapshot.val().sort(sorting().sortBy('position', true))
      setAllTiers(sortedTiers)
    })
  }

  return (
    <>
      <HeaderBar
        toggleMenu={handleDrawerToggle}
        drawerActive={drawerActive} />
      <Drawer
        section="mcu"
        drawerActive={drawerActive} />
      <div
        className={`window-shade ${drawerActive ? 'active' : ''}`}
        onClick={handleDrawerToggle} />
      <div className="main-body">
        <TiersList movies={allMovies} tiers={allTiers} />
      </div>
    </>
  )
}

export default McuRankPage
