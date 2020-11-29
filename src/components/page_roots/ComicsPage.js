import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import HeaderBar from 'components/HeaderBar/HeaderBar'
import Drawer from 'components/Drawer/Drawer'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterControls from 'components/FilterControls/FilterControls'
import api from 'src/api/api'

import './ComicsPage.scss'

// Store responses after calls
const COMIC_CACHE = {}

const ComicsPage = () => {
  let [fullResults, setFullResults] = useState([])
  let [comicResults, setComicResults] = useState([])

  let [activeFilter, setActiveFilter] = useState('(all)')

  let [drawerActive, setDrawerActive] = useState(false)
  let [filterOpen, setFilterOpen] = useState(false)

  const toggleFilterOpen = () => {
    setFilterOpen(!filterOpen)
  }
  const handleDrawerToggle = () => {
    setDrawerActive(!drawerActive)
  };

  let [msg, setMsg] = useState('')
  let [filterDate, setFilterDate] = useState('thisWeek')

  useEffect(() => {
    getComics('thisWeek')
  }, []);

  function getComics(dateString) {
    setMsg('')
    setComicResults([])
    if (COMIC_CACHE[dateString]) {
      setFullResults(COMIC_CACHE[dateString])
      setComicResults(COMIC_CACHE[dateString])
      setFilterDate(dateString)
    } else {
      api.getComicsByDateDescriptor(dateString)
        .then(response => response.json())
        .then(response => {
          if (response.data.results.length) {
            const results = response.data.results.filter(comic => {
              return comic.title.toLowerCase().indexOf('star wars') === -1
            })
            COMIC_CACHE[dateString] = results
            setFullResults(results)
            setComicResults(results)
          } else {
            setMsg('no comics found')
          }
        })
        .catch(err => {
          setMsg('Error getting comics')
        	console.log(err)
        })
        .finally(() => setFilterDate(dateString))

    }
  }

  function filterComics(term) {
    setActiveFilter(term)
    if (fullResults.length) {
      const filteredComics = fullResults.filter(comic => {
        return comic.title.indexOf(term) !== -1
      })
      setComicResults(filteredComics)
    }
    handleDrawerToggle()
  }

  function resetComics() {
    setActiveFilter('(all)')
    getComics(filterDate)
    handleDrawerToggle()
  }

  function handleFilterDateChange(e) {
    getComics(e.target.value)
  }

  return (
    <>
      {msg.length
        ? <p>{msg}</p>
        : null
      }
      <Drawer section="comics" drawerActive={drawerActive}>
        <FilterControls
          comicResults={comicResults}
          fullResults={fullResults}
          resetComics={resetComics}
          filterComics={filterComics}
          filterDate={filterDate}
          toggleFilterOpen={toggleFilterOpen}
          filterOpen={filterOpen}
          activeFiler={activeFilter}
          handleFilterDateChange={handleFilterDateChange} />
      </Drawer>
      <div
        className={`window-shade ${drawerActive ? 'active' : ''}`}
        onClick={handleDrawerToggle} />
      <HeaderBar
        toggleMenu={handleDrawerToggle}
        drawerActive={drawerActive} />
      <div className="main-body">
        <ComicsList comics={comicResults} />
      </div>
    </>
  )
}

export default ComicsPage
