import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ComicsList from 'components/ComicsList'

const ComicsBody = () => {
  let [responseObj, setResponseObj] = useState({})
  const API_BASE = 'http://gateway.marvel.com/v1/public'
  const MARVEL_API_PUBLIC = 'a2247180c2419763e9dd936e4d1f0aab'

  function getComics() {
    const fetchURI = `${API_BASE}/comics?dateDescriptor=nextWeek&apikey=${MARVEL_API_PUBLIC}`
    // const fetchURI = `${API_BASE}/characters?apikey=${MARVEL_API_PUBLIC}`
    fetch(fetchURI, {
      "method": "GET",
      "referrer": "developer.marvel.com",  // required for API responses
      "referrerPolicy": "no-referrer-when-downgrade"
    })
    .then(response => response.json())
    .then(response => {
      setResponseObj(response)
    })
    .catch(err => {
    	console.log(err);
    })
  }

  return (
    <div>
      <h2>Comics</h2>
      <button onClick={getComics}>Get Next Weeks Comics</button>
      <ComicsList comics={responseObj.data} />
    </div>
  )
}

export default ComicsBody
