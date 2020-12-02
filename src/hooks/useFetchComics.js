import React, { useState, useEffect } from 'react'
import api from 'src/api/api'

// Clear Cached Responses after 1 hour
const lastStore = localStorage.getItem('lastStore')
const sinceLastStore = (Date.now() - lastStore)
console.log(' ** sinceLastStore: ', sinceLastStore)
if (sinceLastStore > 3600000) {
  localStorage.clear();
}

export const useFetchComics = (dateString) => {
  const [ comics, setComics ] = React.useState([])
  const [ loading, setLoading ] = React.useState(true)

  React.useEffect(() => {
    setLoading(true)
    if (localStorage.getItem(dateString)) {
      console.log(' ** Getting Comics Results From Cache')
      setComics(JSON.parse(localStorage.getItem(dateString)))
      setLoading(false)
    } else {
      api.getComicsByDateDescriptor(dateString)
        .then(response => response.json())
        .then(response => {
          if (response.data.results.length) {
            console.log(' ** Getting Comics Results From API')
            const results = response.data.results.filter(comic => {
              return comic.title.toLowerCase().indexOf('star wars') === -1
            })
            localStorage.setItem(dateString, JSON.stringify(results))
            localStorage.setItem('lastStore', Date.now())
            setComics(results)
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => setLoading(false))
    }
  }, [dateString])

  return [ loading, comics ]
}
