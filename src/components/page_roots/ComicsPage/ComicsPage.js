import React, { useState, useEffect } from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterComics from 'components/forms/FilterComics/FilterComics'
import { useFetchComics } from './useFetchComics'

const ComicsPage = () => {
  const [fullResults, setFullResults] = useState([])
  const [comicResults, setComicResults] = useState([])
  const [activeFilter, setActiveFilter] = useState('(all)')
  const [filterDate, setFilterDate] = useState('thisWeek')
  const [loadingComics, comicsResults] = useFetchComics(filterDate)

  useEffect(() => {
    initComics(filterDate)
  }, [comicsResults]);

  function initComics(dateString) {
    setFullResults(comicsResults)
    setComicResults(comicsResults)
    setFilterDate(dateString)
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
    initComics(filterDate)
  }

  function handleFilterDateChange(e) {
    setFilterDate(e.target.value)
  }

  const FilterComicsProps = {
    resetComics,
    filterComics,
    filterDate,
    activeFilter,
    handleFilterDateChange
  }

  return (
    <CommonTemplate
      drawerChildren={
        <FilterComics {...FilterComicsProps} />
      }
      pageName="comics"
    >
      {loadingComics && <div className="loading">loading...</div>}
      <ComicsList comics={comicResults} />
    </CommonTemplate>
  )
}

export default ComicsPage
