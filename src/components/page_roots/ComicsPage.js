import React, { useState, useEffect } from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterComics from 'components/FilterComics/FilterComics'
import { useFetchComics } from 'hooks/useFetchComics'

const ComicsPage = () => {
  const [fullResults, setFullResults] = useState([])
  const [comicResults, setComicResults] = useState([])
  const [activeFilter, setActiveFilter] = useState('(all)')
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterDate, setFilterDate] = useState('thisWeek')
  const [loading, comicsResults] = useFetchComics(filterDate)
  const toggleFilterOpen = () => {
    setFilterOpen(!filterOpen)
  }
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
    toggleFilterOpen,
    filterOpen,
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
      <ComicsList comics={comicResults} />
    </CommonTemplate>
  )
}

export default ComicsPage
