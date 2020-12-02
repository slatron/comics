import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CommonTemplate from 'components/Layout/CommonTemplate'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterComics from 'components/FilterComics/FilterComics'
import api from 'src/api/api'

// Clear Cached Responses after 1 hour
const lastStore = localStorage.getItem('lastStore')
const sinceLastStore = (Date.now() - lastStore)
if (sinceLastStore > 3600000) {
  localStorage.clear();
}

const ComicsPage = () => {
  const [fullResults, setFullResults] = useState([])
  const [comicResults, setComicResults] = useState([])
  const [activeFilter, setActiveFilter] = useState('(all)')
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterDate, setFilterDate] = useState('thisWeek')

  const toggleFilterOpen = () => {
    setFilterOpen(!filterOpen)
  }

  useEffect(() => {
    getComics('thisWeek')
  }, []);

  function getComics(dateString) {
    setComicResults([])
    if (localStorage.getItem(dateString)) {
      setFullResults(JSON.parse(localStorage.getItem(dateString)))
      setComicResults(JSON.parse(localStorage.getItem(dateString)))
      setFilterDate(dateString)
    } else {
      api.getComicsByDateDescriptor(dateString)
        .then(response => response.json())
        .then(response => {
          if (response.data.results.length) {
            const results = response.data.results.filter(comic => {
              return comic.title.toLowerCase().indexOf('star wars') === -1
            })
            localStorage.setItem(dateString, JSON.stringify(results))
            localStorage.setItem('lastStore', Date.now())
            setFullResults(results)
            setComicResults(results)
          }
        })
        .catch(err => {
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
  }

  function resetComics() {
    setActiveFilter('(all)')
    getComics(filterDate)
  }

  function handleFilterDateChange(e) {
    getComics(e.target.value)
  }

  const FilterComicsProps = {
    resetComics,
    filterComics,
    filterDate,
    toggleFilterOpen,
    filterOpen,
    activeFilter,
    handleFilterDateChange
  }

  return (
    <>
    <CommonTemplate
      drawerChildren={
        <FilterComics {...FilterComicsProps} />
      }
      pageName="comics"
    >
      <ComicsList comics={comicResults} />
    </CommonTemplate>
    </>
  )
}

export default ComicsPage
