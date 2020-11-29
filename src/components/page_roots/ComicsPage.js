import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CommonTemplate from 'components/Layout/CommonTemplate'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterControls from 'components/FilterControls/FilterControls'
import api from 'src/api/api'

// Store responses after calls
const COMIC_CACHE = {}

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

  return (
    <>
    <CommonTemplate
      drawerChildren={
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
      }
      pageName="comics"
    >
      <ComicsList comics={comicResults} />
    </CommonTemplate>
    </>
  )
}

export default ComicsPage
