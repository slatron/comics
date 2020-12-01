import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CommonTemplate from 'components/Layout/CommonTemplate'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterComics from 'components/FilterComics/FilterComics'
import api from 'src/api/api'

// Clear Cached Responses after 1 hour
const lastStore = localStorage.getItem('lastStore')
const sinceLastStore = (Date.now() - lastStore)
console.log('sinceLastStore: ', sinceLastStore)
if (sinceLastStore > 3600000) {
  localStorage.clear();
}

const COMIC_CACHE = {
  'lastWeek': JSON.parse(localStorage.getItem('lastWeek')),
  'thisWeek': JSON.parse(localStorage.getItem('thisWeek')),
  'nextWeek': JSON.parse(localStorage.getItem('nextWeek')),
  'thisMonth': JSON.parse(localStorage.getItem('thisMonth'))
}

const ComicsPage = () => {
  let [fullResults, setFullResults] = useState([])
  let [comicResults, setComicResults] = useState([])
  let [activeFilter, setActiveFilter] = useState('(all)')
  let [filterOpen, setFilterOpen] = useState(false)
  let [filterDate, setFilterDate] = useState('thisWeek')

  const toggleFilterOpen = () => {
    setFilterOpen(!filterOpen)
  }

  useEffect(() => {
    getComics('thisWeek')
  }, []);

  function getComics(dateString) {
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
