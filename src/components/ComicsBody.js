import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ComicsList from 'components/ComicsList/ComicsList'

const ComicsBody = () => {
  let [comicResults, setComicResults] = useState([])
  let [msg, setMsg] = useState('')
  let [filterDate, setFilterDate] = useState('nextWeek')

  const API_BASE = 'http://gateway.marvel.com/v1/public'
  const MARVEL_API_PUBLIC = 'a2247180c2419763e9dd936e4d1f0aab'

  function getComics() {
    setMsg('')
    const fetchURI = `${API_BASE}/comics?dateDescriptor=${filterDate}&apikey=${MARVEL_API_PUBLIC}&limit=100`
    fetch(fetchURI, {
      "method": "GET",
      "referrer": "developer.marvel.com",  // required for API responses
      "referrerPolicy": "no-referrer-when-downgrade"
    })
    .then(response => response.json())
    .then(response => {
      if (response.data.results.length) {
        setComicResults(response.data.results)
      } else {
        setMsg('no comics found')
      }
    })
    .catch(err => {
      setMsg('Error getting comics')
    	console.log(err)
    })
  }

  function filterVariants() {
    if (comicResults.length) {
      const filteredComics = comicResults.filter(comic => {
        return comic.title.indexOf('(Variant)') !== -1
      }).filter(comic => {
        return comic.title.indexOf('Star Wars') === -1
      })
      setComicResults(filteredComics)
    }
  }

  function filterTradePaperbacks() {
    if (comicResults.length) {
      const filteredComics = comicResults.filter(comic => {
        return comic.title.indexOf('(Trade Paperback)') !== -1
      }).filter(comic => {
        return comic.title.indexOf('Star Wars') === -1
      })
      setComicResults(filteredComics)
    }
  }

  function handleFilterDateChange(e) {
    setFilterDate(e.target.value)
  }

  return (
    <div>
      <h2>Comics</h2>
      {msg.length
        ? <p>{msg}</p>
        : null
      }

      <label>
        Select a date filter
        <select value={filterDate} onChange={handleFilterDateChange}>
          <option value="lastWeek">Last Week</option>
          <option value="thisWeek">This Week</option>
          <option value="nextWeek">Next Week</option>
          <option value="thisMonth">This Month</option>
        </select>
      </label>

      <button onClick={getComics}>Show Comics</button>
      {comicResults.length
        ? <button onClick={filterVariants}>Display Only Variants</button>
        : null
      }
      {comicResults.length
        ? <button onClick={filterTradePaperbacks}>Display Only Trade Paperbacks</button>
        : null
      }
      <ComicsList comics={comicResults} />
    </div>
  )
}

export default ComicsBody
