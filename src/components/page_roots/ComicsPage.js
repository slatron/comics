import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import HeaderBar from 'components/HeaderBar/HeaderBar'
import Drawer from 'components/Drawer/Drawer'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterControls from 'components/FilterControls/FilterControls'
import api from 'src/api/api'

// Store responses after calls
const COMIC_CACHE = {}

const ComicsPage = () => {
  let [fullResults, setFullResults] = useState([]);
  let [comicResults, setComicResults] = useState([])
  let [drawerActive, setdrawerActive] = useState(false)
  const handleMenuToggle = () => {
    setdrawerActive(!drawerActive)
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
    if (fullResults.length) {
      const filteredComics = fullResults.filter(comic => {
        return comic.title.indexOf(term) !== -1
      })
      setComicResults(filteredComics)
    }
  }

  function resetComics() {
    getComics(filterDate)
  }

  function handleFilterDateChange(e) {
    getComics(e.target.value)
  }

  //   <FilterControls
  //     comicResults={comicResults}
  //     fullResults={fullResults}
  //     resetComics={resetComics}
  //     filterComics={filterComics}
  //     filterDate={filterDate}
  //     handleFilterDateChange={handleFilterDateChange} />

  return (
    <>
      {msg.length
        ? <p>{msg}</p>
        : null
      }
      <HeaderBar toggleMenu={handleMenuToggle} drawerActive={drawerActive} />
      <Drawer section="comics" drawerActive={drawerActive} />
      <div className="main-body">
        <ComicsList comics={comicResults} />
      </div>
    </>
  )
}

export default ComicsPage
