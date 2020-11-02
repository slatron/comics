import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterControls from 'components/FilterControls/FilterControls'

import './ComicsPage.scss'

const noop = () => {}

const ComicsPage = () => {
  let [fullResults, setFullResults] = useState([]);
  let [comicResults, setComicResults] = useState([])
  let [msg, setMsg] = useState('')
  let [filterDate, setFilterDate] = useState('thisWeek')

  useEffect(() => {
    getComics('thisWeek')
  }, []);

  const API_BASE = 'https://gateway.marvel.com/v1/public'
  const MARVEL_API_PUBLIC = 'a2247180c2419763e9dd936e4d1f0aab'

  function getComics(dateString) {
    setMsg('')
    const fetchURI = `${API_BASE}/comics?dateDescriptor=${dateString}&apikey=${MARVEL_API_PUBLIC}&limit=100`
    const requestConfig = window.location.hostname === 'localhost'
      ? {
          "method": "GET",
          "referrer": "developer.marvel.com",  // required for API responses
          "referrerPolicy": "no-referrer-when-downgrade"
        }
      : { "method": "GET" }
    fetch(fetchURI, requestConfig)
    .then(response => response.json())
    .then(response => {
      if (response.data.results.length) {
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
        resetComics={resetComics}
        filterComics={filterComics}
        filterDate={filterDate}
        handleFilterDateChange={handleFilterDateChange} />
      <ComicsList comics={comicResults} />
    </div>
  )
}

export default ComicsPage
