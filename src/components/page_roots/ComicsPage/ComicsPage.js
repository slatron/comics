import React, { useState, useEffect } from 'react'
import CommonTemplate from 'components/Layout/CommonTemplate'
import ComicsList from 'components/ComicsList/ComicsList'
import FilterComics from 'components/forms/FilterComics/FilterComics'
import { useFetchComics } from './useFetchComics'

const ComicsPage = () => {
  const [activeFilter, setActiveFilter] = useState('(all)')
  const [filterDate, setFilterDate] = useState('thisWeek')
  const [loadingComics, comicsRaw] = useFetchComics(filterDate)
  const [comicResults, setComicResults] = useState([])

  useEffect(() => {
    setComicResults(comicsRaw)
  }, [comicsRaw])

  const filterComics = (term) => {
    setActiveFilter(term)
    if (comicsRaw.length) {
      const filteredComics = comicsRaw.filter(comic => {
        return comic.title.indexOf(term) !== -1
      })
      setComicResults(filteredComics)
    }
  }

  const resetComics = () => {
    setActiveFilter('(all)')
    setComicResults(comicsRaw)
  }

  const handleFilterDateChange = (e) => {
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
