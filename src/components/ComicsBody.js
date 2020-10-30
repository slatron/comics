import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ComicsList from 'components/ComicsList/ComicsList'

import './ComicsBody.scss'

const noop = () => {}

const ComicsBody = () => {
  let [comicResults, setComicResults] = useState([])
  let [msg, setMsg] = useState('')
  let [filterDate, setFilterDate] = useState('thisWeek')
  let [resultsFiltered, setResultsFiltered] = useState(false)
  let [fullResults, setFullResults] = useState([]);

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
        setComicResults(response.data.results)
        setResultsFiltered(false)
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

  function filterComics(e) {
    resultsFiltered ? setComicResults(fullResults) : noop
    if (comicResults.length) {
      const filteredComics = comicResults.filter(comic => {
        return comic.title.indexOf(e.target.dataset.filter) !== -1
      }).filter(comic => {
        return comic.title.indexOf('Star Wars') === -1
      })
      setFullResults(comicResults);
      setComicResults(filteredComics)
      setResultsFiltered(true)
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
      <div className="filter-controls">
        {msg.length
          ? <p>{msg}</p>
          : null
        }
        <select value={filterDate} onChange={handleFilterDateChange}>
          <option value="lastWeek">Last Week</option>
          <option value="thisWeek">This Week</option>
          <option value="nextWeek">Next Week</option>
          <option value="thisMonth">This Month</option>
        </select>
        {comicResults.length
          ? <button data-filter="(Variant)" onClick={filterComics}>Variants</button>
          : null
        }
        {comicResults.length
          ? <button data-filter="(Trade Paperback)" onClick={filterComics}>Trades</button>
          : null
        }
        {resultsFiltered
          ? <button onClick={resetComics}>reset</button>
          : null
        }
      </div>
      <ComicsList comics={comicResults} />
    </div>
  )
}

export default ComicsBody
