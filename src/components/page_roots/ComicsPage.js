import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterControls from 'components/FilterControls/FilterControls'
import api from 'src/api/api'
import './ComicsPage.scss'

const COMIC_CACHE = {}

const ComicsPage = () => {
  let [fullResults, setFullResults] = useState([]);
  let [comicResults, setComicResults] = useState([])
  let [msg, setMsg] = useState('')
  let [filterDate, setFilterDate] = useState('thisWeek')

  useEffect(() => {
    getComics('thisWeek')
  }, []);

  function getComics(dateString) {
    setMsg('')
    if (COMIC_CACHE[dateString]) {
      setFullResults(COMIC_CACHE[dateString])
      setComicResults(COMIC_CACHE[dateString])
      setFilterDate(dateString)
    } else {
      api.getComicsByDateDescriptor(dateString)
        .then(response => response.json())
        .then(response => {
          if (response.data.results.length) {
            COMIC_CACHE[dateString] = response.data.results
            setFullResults(response.data.results)
            setComicResults(response.data.results)
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
      }).filter(comic => {
        return comic.title.indexOf('Star Wars') === -1
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

  return (
    <div>
      {msg.length
        ? <p>{msg}</p>
        : null
      }
      <FilterControls
        comicResults={comicResults}
        fullResults={fullResults}
        resetComics={resetComics}
        filterComics={filterComics}
        filterDate={filterDate}
        handleFilterDateChange={handleFilterDateChange} />
      <ComicsList comics={comicResults} />
    </div>
  )
}

export default ComicsPage
